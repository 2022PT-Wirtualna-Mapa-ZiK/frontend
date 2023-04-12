import React from "react";
import path from "path";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { number } from "yup";
import { Col } from "reactstrap";

const Home = () => {
  const professions = [
    { description: "IT Specialist", key: 0 },
    { description: "Biotechnologist", key: 1 },
    { description: "Logistician", key: 2 },
    { description: "Electrical engineer", key: 3 },
    { description: "Doctor", key: 4 },
    { description: "Trainer", key: 5 },
    { description: "Financial specialist", key: 6 },
    { description: "Data scientist", key: 7 },
    { description: "Graphic designer", key: 8 },
    { description: "Researcher", key: 9 },
  ];
  const [sizeToday, setSizeToday] = useState(0);
  const [sizeYesterday, setSizeYesterday] = useState(0);
  const [sizeBeforeYesterday, setSizeBeforeYesterday] = useState(0);

  //const basicAuth = "Basic" + btoa("admin@gmail.com Admin123#");
  const AmountfromDate = async (date: string): Promise<number> => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/data/offersFromCertainDay?date=" + date,
        {
          method: "GET",
          headers: {
            authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        //console.log(data);
        //console.log(data[0].amountOfOffers);
        return data[0].amountOfOffers;
      } else {
        //console.log(response.status);
        return 0; // Wartość domyślna w przypadku błędu
      }
    } catch (err) {
      console.log(err);
      return 0; // Wartość domyślna w przypadku błędu
    }
  };
 const [dataWorkMode, setDataWorkMode] = useState([["Mode", "The number of operating modes"],]);

  const CollectData = async (url: string): Promise<any> => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/data" + url, {
        method: "GET",
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        return data;
      } else {
        console.log(response.status);
        return 0; // Wartość domyślna w przypadku błędu
      }
    } catch (err) {
      console.log(err);
      return 0; // Wartość domyślna w przypadku błędu
    }
  };
  useEffect(() => {
    CollectData("/workModes")
      .then((data) => {
        //setDataWorkMode([["Mode", "The number of operating modes"]]);
        console.log(data);
        //dataWorkMode.push();
        // data.forEach((item: any) => {
          //   dataWorkMode.push([item.workMode, item.amountOfOffers]);
          //   //console.log(dataWorkMode);
          // });
        
        const newData = data.map((item: any) => item);
        console.log(newData)
        setDataWorkMode(newData); 
        console.log(dataWorkMode);
      })
      .catch((err) => {
        console.error(err);
      });
      console.log(dataWorkMode);
      // CollectData("/agreementTypes")
      // .then((data) => {
      //   //console.log(data);
      //   //dataWorkMode.push();
      //   data.forEach((item: any) => {
      //     dataWorkMode.push([item.workMode, item.amountOfOffers]);
      //   });
      //   //console.log(dataWorkMode);
      // })
      // .catch((err) => {
      //   console.error(err);
      // });
  },[[]]);

  AmountfromDate("05/04/2023")
    .then((amount) => {
      //console.log(amount);
      setSizeToday(amount);
    })
    .catch((err) => {
      console.error(err);
    });
  AmountfromDate("04/04/2023")
    .then((amount) => {
      //console.log(amount);
      setSizeYesterday(amount);
    })
    .catch((err) => {
      console.error(err);
    });
  AmountfromDate("03/04/2023")
    .then((amount) => {
      //console.log(amount);
      setSizeBeforeYesterday(amount);
    })
    .catch((err) => {
      console.error(err);
    });
  const dataContract = useState([["Type", "The number of the contract type"]]);
  // [
  //   ["Type", "The number of the contract type"],
  //   //["Umowa o prace", 51],
  //   // ["Umowa zlecenie", 10],
  //   // ["B2B", 34],
  //   // ["Inne", 0],
  // ];
 
  //[
  //   ["Mode", "The number of operating modes"],
  //   // ["Praca stacjonarna", 60],
  //   // ["Praca zdalna", 12],
  //   // ["Praca hybrydowa", 67],
  //   // ["Inne", 0],
  // ];

  const options1 = {
    title: "Typy umów",
    is3D: true,
    backgroundColor: "transparent",
    width: 700,
    height: 400,
  };
  const options2 = {
    title: "Tryby pracy",
    is3D: true,
    backgroundColor: "transparent",
    width: 700,
    height: 400,
  };
  return (
    <div className="home">
      <div className="div-home">
        <button className="btn-acc">Register</button>
        <button className="btn-log">Log in</button>
      </div>
      <div className="div-welcome">
        <p>Welcome!</p>
      </div>
      <div className="div-stats">
        <div>Oferty pracy na dzień dzisiejszy:&nbsp;{sizeToday}</div>
        <div>
          Oferty pracy wczoraj:
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {sizeYesterday}
        </div>
        <div>
          Oferty pracy
          przedwczoraj:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {sizeBeforeYesterday}
        </div>
      </div>
      <div className="div-title">
        <h1>Current rating of the most sought-after professions:</h1>
      </div>
      <div className="div-charts">
        <div id="chart1">
          <Chart chartType="PieChart" data={dataContract} options={options1} />
        </div>
        <div id="chart2">
          <Chart chartType="PieChart" options={options2} data={dataWorkMode} />
        </div>
      </div>

      <div className="div-list">
        <ol>
          {/* display each value(profession) from list */}
          {professions.map((profess) => {
            return <li key={profess.key}>{profess.description}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Home;

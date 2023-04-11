import React from "react";
import path from "path";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Chart } from "react-google-charts";

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
  fetch("http://localhost:8000/api/v1/data/scrappedData?size=1000000", {
    method: "GET",
    headers: {
      authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        console.log("There is nso such user in the database");
      }
    })
    .then((data) => {
      console.log(data);
      //console.log(data.size);
      setSizeToday(data.content.length);
      localStorage.setItem("loginKey", JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err);
    });

  const dataContract = [
    ["Type", "The number of the contract type"],
    ["Umowa o prace", 51],
    ["Umowa zlecenie", 10],
    ["B2B", 34],
    ["Inne", 0],
  ];
  const dataWorkMode = [
    ["Mode", "The number of operating modes"],
    ["Praca stacjonarna", 60],
    ["Praca zdalna", 12],
    ["Praca hybrydowa", 67],
    ["Inne", 0],
  ];

  const options1 = {
    title: "Typy umów",
    is3D: true,
    backgroundColor: "transparent",
    width: 1000,
    height: 400,
  };
  const options2 = {
    title: "Tryby pracy",
    is3D: true,
    backgroundColor: "transparent",
    width: 1000,
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
      <div className="div-chart">
        <div id="chart1">
          <Chart
            chartType="PieChart"
            data={dataContract}
            options={options1}
            width={"400px"}
            height={"100px"}
          />
        </div>
        <div id="chart2">
          <Chart
            chartType="PieChart"
            data={dataWorkMode}
            options={options2}
            width={"500px"}
            height={"100px"}
          />
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

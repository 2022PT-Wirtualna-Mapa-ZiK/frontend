import React from "react";
import path from "path";
import "./home.css";
import { useNavigate} from "react-router-dom";
import { useState } from "react";

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
  const [sizeToday, setSizeToday] = useState();
  //const basicAuth = "Basic" + btoa("admin@gmail.com Admin123#");
  fetch("http://localhost:8000/api/v1/data/scrappedData", {
    method: "GET",
    headers: {
      authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
    },
    })
    .then((response) =>{
      if(response.status === 200){
        return response.json();
      }
      else
      {
        console.log("There is no such user in the database");
      }
    })
    .then((data) => {
      console.log(data);
      //console.log(data.size);
      setSizeToday(data.size);
      localStorage.setItem("loginKey", JSON.stringify(data));
    })
    .catch((err) => {
      console.log(err);
    });
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
        <div>Oferty pracy na dzień dzisiejszy: {sizeToday}</div>
        <div>
          Oferty pracy
          wczoraj:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          977
        </div>
        <div>
          Oferty pracy
          przedwczoraj:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;979
        </div>
      </div>
      <div className="div-title">
        <h1>Current rating of the most sought-after professions:</h1>
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

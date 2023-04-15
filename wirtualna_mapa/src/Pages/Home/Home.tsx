import React from "react";
import path from "path";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { number } from "yup";
import { Col } from "reactstrap";
import useData from "../../hooks/useData";
import { workModeChart, contractTypeChart } from "./charts";
import { workModeData} from "../../models/workMode";
import { contractTypeData} from "../../models/contractType";
import './home.css';
import Button from "../../Components/Button/button";
import { PATHS } from '../../utils/consts';



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
    {description: 'Informatyk', key: 0},
    {description: 'Biotechnolog', key: 1},
    {description: 'Logistyk', key: 2},
    {description: 'Elektryk', key: 3},
    {description: 'Lekarz', key: 4},
    {description: 'Trener', key: 5},
    {description: 'Finance manager', key: 6},
    {description: 'Data scientist', key: 7},
    {description: 'Graphic designer', key: 8},
    {description: 'Researcher', key: 9},
  ];
  const [sizeToday, setSizeToday] = useState(0);
  const [sizeYesterday, setSizeYesterday] = useState(0);
  const [sizeBeforeYesterday, setSizeBeforeYesterday] = useState(0);
  const {getWorkModeData} = useData();
  const {getContractTypeData} = useData();
  const {AmountFromDate} = useData();


  const [dataWorkMode, setDataWorkMode] = useState<workModeData[]>();
  const [dataContractType, setDataContractType] = useState<contractTypeData[]>();

  useEffect(() => {
    const getWorkModes = async () => {
      const users = await getWorkModeData();
      const dataPre  = JSON.stringify(users.data)
      const dataReady : workModeData[] = JSON.parse(dataPre)
      setDataWorkMode(dataReady)
    }; 
    const getContractTypes = async () => {
      const users = await getContractTypeData();
      const dataPre  = JSON.stringify(users.data)
      const dataReady : contractTypeData[] = JSON.parse(dataPre)
      setDataContractType(dataReady)
    }; 
    const getDaysAmount = async () =>{
      const today=await AmountFromDate("05/04/2023");
      const yesterday=await AmountFromDate("04/04/2023");
      const beforeYesterday=await AmountFromDate("03/04/2023");

      setSizeToday(today.data as number);
      setSizeYesterday(yesterday.data as number);
      setSizeBeforeYesterday(beforeYesterday.data as number);
    }  
    getWorkModes();    
    getContractTypes();
    getDaysAmount();
  },[])  
  
  let workModes = [];
  workModes.push(["Element", "Density"]);    //give the headers for the chart data
  dataWorkMode?.forEach(v => {
    workModes.push([v.workMode, v.amountOfOffers]);
  });

  let contractTypes = [];
  contractTypes.push(["Element", "Density"]);    //give the headers for the chart data
  dataContractType?.forEach(v => {
    contractTypes.push([v.agreement, v.amountOfOffers]);
  });

  
  return (
    <div className='home'>
      <div className="div-home">        
        <Button link={PATHS.register} text="Zarejestruj się"/>
        <Button link={PATHS.login} text="Zaloguj się"/>

      </div>

      <div className="div-welcome">        
        <p>Witaj!</p>
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
        <h1>Aktualnie najczęściej wyszukiwane zawody:</h1>
      </div>
      <div className="div-charts">
        <div id="chart1">
          <Chart chartType="PieChart" data={contractTypes} options={contractTypeChart} />
        </div>

        <div id="chart2">
          <Chart chartType="PieChart" data={workModes} options={workModeChart} />
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

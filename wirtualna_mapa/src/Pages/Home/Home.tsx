import React from "react";
import path from "path";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import { number } from "yup";
import { Col } from "reactstrap";
import useData from "../../hooks/useData";
import { gradeData} from "../../models/grade";
import { recruitmentTypeData} from "../../models/recruitmentType";
import { workModeData} from "../../models/workMode";
import { contractTypeData} from "../../models/contractType";
import { gradesChart, recruitmentTypeChart, workModeChart, contractTypeChart } from "./charts";
import './home.css';
import Button from "../../Components/Button/button";
import { PATHS } from '../../utils/consts';
import { IServerResponse } from "../../models/responses/serverResponse";
import { getPromisedData } from "../../utils/functions";



const Home = () => {
  const professions = [
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
  const {getGradeData} = useData();
  const {getRecruitmentTypeData} = useData();
  const {getWorkModeData} = useData();
  const {getContractTypeData} = useData();
  const {AmountFromDate} = useData();
  
  const [dataGrade, setDataGrade] = useState<gradeData[]>();
  const [dataRecruitmentType, setDataRecruitmentType] = useState<recruitmentTypeData[]>();
  const [dataWorkMode, setDataWorkMode] = useState<workModeData[]>();
  const [dataContractType, setDataContractType] = useState<contractTypeData[]>();

  useEffect(() => {
    const getGrades = async () => {
      const users = await getGradeData();
      const dataPre  = JSON.stringify(users.data)
      console.log(users.data);
      const dataReady : gradeData[] = JSON.parse(dataPre)
      setDataGrade(dataReady)
    };
    const getRecruitmentTypes = async () => {
      const users = await getRecruitmentTypeData();
      const dataPre  = JSON.stringify(users.data)
      console.log(users.data);
      const dataReady : recruitmentTypeData[] = JSON.parse(dataPre)
      setDataRecruitmentType(dataReady)
    };
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
      const today=await AmountFromDate("17/04/2023");
      const yesterday=await AmountFromDate("16/04/2023");
      const beforeYesterday=await AmountFromDate("15/04/2023");

      setSizeToday(today.data as number);
      setSizeYesterday(yesterday.data as number);
      setSizeBeforeYesterday(beforeYesterday.data as number);
    }  
    getPromisedData(getWorkModeData()).then(x => {
        setDataWorkMode(x)
    })
    getPromisedData(getContractTypeData()).then(x => {
      setDataContractType(x);
    })

    getGrades();
    getRecruitmentTypes();
    getWorkModes();
    getContractTypes();
    getDaysAmount();
  },[])  
  
  let grades = [];
  grades.push(["Element", "Density"]);    //give the headers for the chart data
  dataGrade?.forEach(v => {
    grades.push([v.grade, v.amountOfOffers]);
  });

  let recruitmentTypes = [];
  recruitmentTypes.push(["Element", "Density"]);    //give the headers for the chart data
  dataRecruitmentType?.forEach(v => {
    recruitmentTypes.push([v.recruitmentType, v.count]);
  });

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
        <div id="contractTypes">
          <Chart chartType="PieChart" data={contractTypes} options={contractTypeChart} />
        </div>

        <div id="workModes">
          <Chart chartType="PieChart" data={workModes} options={workModeChart} />
        </div>
{/* 
        <div id="grades">
          <Chart chartType="PieChart" data={grades} options={gradesChart} />
        </div>

        <div id="recruitmentTypes">
          <Chart chartType="PieChart" data={recruitmentTypes} options={recruitmentTypeChart} />
        </div> */}

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

import React, { FC, useEffect, useState } from 'react';
import './CategoriesEmployers.css';
import useData from '../../hooks/useData';
import { gradeData} from "../../models/grade";
import { recruitmentTypeData} from "../../models/recruitmentType";
import { salaryRangeData } from '../../models/salaryRange';
import { categories } from '../../models/categories';
import { employers } from '../../models/employers';
import { salaryRangeChart } from './charts';
import { getPromisedData } from '../../utils/functions';
import Button from "../../Components/Button/button";
import { gradesChart, recruitmentTypeChart, mostPopularEmployersChart, mostPopularJobsOfferChart } from './charts';
import { PATHS } from '../../utils/consts';
import {Chart, GoogleChartWrapperChartType} from 'react-google-charts';
import { string } from 'yup';
import { title } from 'process';

interface CategoriesEmployersProps {}

const CategoriesEmployers: FC<CategoriesEmployersProps> = () => {
  const {getGradeData} = useData();
  const {getRecruitmentTypeData} = useData();
  const {getCategoriesData} = useData();
  const {getEmployersData} = useData();
  const {getSalaryRangeData} = useData();

  const [dataGrade, setDataGrade] = useState<gradeData[]>();
  const [dataRecruitmentType, setDataRecruitmentType] = useState<recruitmentTypeData[]>();
  const [dataCategories, setDataCategories] = useState<categories[]>();
  const [dataEmployers, setDataEmployers] = useState<employers[]>();
  const [dataSalaryRange, setDataSalaryRange] = useState<salaryRangeData[]>();

  const[chartNumber,setChartNumber]= useState(0);
  
  let salaryRanges = [];
  salaryRanges.push(["Płaca", "Ilość"]);    //give the headers for the chart data
  dataSalaryRange?.forEach(v => {
    salaryRanges.push([v.range, v.ammountOfOffers]);
  });

  useEffect(() => {  
    
  },[])
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
      const dataReady : recruitmentTypeData[] = JSON.parse(dataPre)
      setDataRecruitmentType(dataReady)
    };
    const getCategories = async () => {
      const users = await getCategoriesData();
      const dataPre  = JSON.stringify(users.data)
      const dataReady : categories[] = JSON.parse(dataPre)
      setDataCategories(dataReady)
    }; 
    const getEmployers = async () => {
      const users = await getEmployersData();
      const dataPre  = JSON.stringify(users.data)
      const dataReady : employers[] = JSON.parse(dataPre)
      setDataEmployers(dataReady)
    }
    getPromisedData(getSalaryRangeData()).then(x => {
      setDataSalaryRange(x);       
    })
    getGrades();
    getRecruitmentTypes();
    getCategories();    
    getEmployers();
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

  let categories = [];
  categories.push(["Element", "Density"]);    //give the headers for the chart data
  dataCategories?.forEach(v => {
    categories.push([v.category, v.amountOfOffers]);
  });

  let employers = [];
  employers.push(["Element", "Density"]);    //give the headers for the chart data
  dataEmployers?.forEach(v => {
    employers.push([v.employer, v.amountOfOffers]);
  });

  let data=[grades,recruitmentTypes,categories,employers,salaryRanges];
  let options=[gradesChart,recruitmentTypeChart,mostPopularJobsOfferChart,mostPopularEmployersChart,salaryRangeChart];
  let chartTypes=["PieChart","PieChart","PieChart","PieChart","ColumnChart"];
  let titles=["Wymagane doświadczenie","Typy rekrutacji","Najpopularniejsze kategorie ofert pracy","Najpopularniejsi pracodawcy","Ilość ogłoszeń według płac w zł"]
  const chartType = chartTypes[chartNumber] as GoogleChartWrapperChartType;

  return (
    <div className='categoriesEmployers'>
        <div className="div-home">        
          <Button link={PATHS.register} text="Konto"/>
          <Button link={PATHS.logout} text="Wyloguj się"/>
          <Button text="Poprzedni wykres" onClick={()=>{
            setChartNumber((chartNumber-1+5)%5);
          }}/>
          <Button text="Następny wykres" onClick={()=>{
            setChartNumber((chartNumber+1)%5);
          }}/>
        </div>
        <div className="div-title">        
          <h1>{titles[chartNumber]}</h1>
        </div>

        <div id="chart">
          <Chart chartType={chartType} data={data[chartNumber]} options={options[chartNumber]} />
        </div>
        {/* <div id="grades">
          <Chart chartType="PieChart" data={grades} options={gradesChart} />
        </div>

        <div id="recruitmentTypes">
          <Chart chartType="PieChart" data={recruitmentTypes} options={recruitmentTypeChart} />
        </div>
        <div id="categories">
          <Chart chartType="PieChart" data={categories} options={mostPopularJobsOfferChart} />
        </div>
        <div id="employers">
          <Chart chartType="PieChart" data={employers} options={mostPopularEmployersChart} />
        </div>
        <div id="SalaryRange">
            <Chart chartType="ColumnChart" data={salaryRanges} options={salaryRangeChart} />
        </div> */}

    </div>
  
  );
};

export default CategoriesEmployers;

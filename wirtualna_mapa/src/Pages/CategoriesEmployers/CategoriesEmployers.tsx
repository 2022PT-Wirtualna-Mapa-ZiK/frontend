import React, { FC, useEffect, useState } from 'react';
import styles from './CategoriesEmployers.module.css';
import useData from '../../hooks/useData';
import { contractTypeData } from '../../models/contractType';
import { workModeData } from '../../models/workMode';
import { categories } from '../../models/categories';
import { employers } from '../../models/employers';
import { mostPopularEmployersChart, mostPopularJobsOfferChart } from './charts';
import Chart from 'react-google-charts';

interface CategoriesEmployersProps {}

const CategoriesEmployers: FC<CategoriesEmployersProps> = () => {
  const {getCategoriesData} = useData();
  const {getEmployersData} = useData();

  const [dataCategories, setDataCategories] = useState<categories[]>();
  const [dataEmployers, setDataEmployers] = useState<employers[]>();

  useEffect(() => {
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
    
    getCategories();    
    getEmployers();
  },[]) 

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


  
  return (
    <div className='categoriesEmployers'>

    <div className="div-title">        
      <h1>Aktualnie najczęściej wyszukiwane zawody:</h1>
    </div>
    <div className="div-charts">
      <div id="chart1">
        <Chart chartType="PieChart" data={categories} options={mostPopularJobsOfferChart} />
      </div>

      <div id="chart2">
        <Chart chartType="PieChart" data={employers} options={mostPopularEmployersChart} />
      </div>
    </div>
  </div>
  );
};

export default CategoriesEmployers;

import { useEffect, useState } from 'react';
import './general.css';
import useData from '../../hooks/useData';
import { salaryRangeData } from '../../models/salaryRange';
import Chart from 'react-google-charts';
import { salaryRangeChart } from './charts';
import { getPromisedData } from '../../utils/functions';


const General = () => {
  
  const {getSalaryRangeData} = useData();
  const [dataSalaryRange, setDataSalaryRange] = useState<salaryRangeData[]>();

  useEffect(() => {  
    getPromisedData(getSalaryRangeData()).then(x => {
      setDataSalaryRange(x)
  })
  },[]
  )

  let salaryRanges = [];
  salaryRanges.push(["Element", "Density"]);    //give the headers for the chart data
  dataSalaryRange?.forEach(v => {
    salaryRanges.push([v.salaryRange, v.amountOfOffers]);
  });

  return (
    <div className='general'>
      <div id="">
          <Chart chartType="ColumnChart" data={salaryRanges} options={salaryRangeChart} />
        </div>
    </div>
  )
}

export default General;
import React, { useEffect, useState } from 'react';
import './CategoriesEmployers.css';
import useData from '../../hooks/useData';
import { gradeData } from '../../models/grade';
import { recruitmentTypeData } from '../../models/recruitmentType';
import { salaryRangeData } from '../../models/salaryRange';
import { categories } from '../../models/categories';
import { employers } from '../../models/employers';
import { salaryRangeChart } from './charts';
import { getPromisedData } from '../../utils/functions';
import Button from '../../Components/Button/button';
import {
    gradesChart,
    mostPopularEmployersChart,
    mostPopularJobsOfferChart,
    recruitmentTypeChart,
} from './charts';
import { PATHS } from '../../utils/consts';
import { Chart, GoogleChartWrapperChartType } from 'react-google-charts';
import { Footer } from '../../Components/Footer/footer';

const CategoriesEmployers = () => {
    const { getGradeData } = useData();
    const { getRecruitmentTypeData } = useData();
    const { getCategoriesData } = useData();
    const { getEmployersData } = useData();
    const { getSalaryRangeData } = useData();

    const [dataGrade, setDataGrade] = useState<gradeData[]>();
    const [dataRecruitmentType, setDataRecruitmentType] =
        useState<recruitmentTypeData[]>();
    const [dataCategories, setDataCategories] = useState<categories[]>();
    const [dataEmployers, setDataEmployers] = useState<employers[]>();
    const [dataSalaryRange, setDataSalaryRange] = useState<salaryRangeData[]>();

    const [chartNumber, setChartNumber] = useState(0);

    const salaryRanges = [];
    salaryRanges.push(['Płaca', 'Ilość']); //give the headers for the chart data
    dataSalaryRange?.forEach((v) => {
        salaryRanges.push([v.range, v.ammountOfOffers]);
    });

    useEffect(() => {
        const getGrades = async () => {
            const users = await getGradeData();
            const dataPre = JSON.stringify(users.data);
            const dataReady: gradeData[] = JSON.parse(dataPre);
            setDataGrade(dataReady);
        };
        const getRecruitmentTypes = async () => {
            const users = await getRecruitmentTypeData();
            const dataPre = JSON.stringify(users.data);
            const dataReady: recruitmentTypeData[] = JSON.parse(dataPre);
            setDataRecruitmentType(dataReady);
        };
        const getCategories = async () => {
            const users = await getCategoriesData();
            const dataPre = JSON.stringify(users.data);
            const dataReady: categories[] = JSON.parse(dataPre);
            setDataCategories(dataReady);
        };
        const getEmployers = async () => {
            const users = await getEmployersData();
            const dataPre = JSON.stringify(users.data);
            const dataReady: employers[] = JSON.parse(dataPre);
            setDataEmployers(dataReady);
        };
        getPromisedData(getSalaryRangeData()).then((x) => {
            setDataSalaryRange(x);
        });
        getGrades();
        getRecruitmentTypes();
        getCategories();
        getEmployers();
    }, []);

    const grades = [];
    grades.push(['Element', 'Density']); //give the headers for the chart data
    dataGrade?.forEach((v) => {
        grades.push([v.grade, v.amountOfOffers]);
    });

    const recruitmentTypes = [];
    recruitmentTypes.push(['Element', 'Density']); //give the headers for the chart data
    dataRecruitmentType?.forEach((v) => {
        recruitmentTypes.push([v.recruitmentType, v.count]);
    });

    const categories = [];
    categories.push(['Element', 'Density']); //give the headers for the chart data
    dataCategories?.forEach((v) => {
        categories.push([v.category, v.amountOfOffers]);
    });

    const employers = [];
    employers.push(['Element', 'Density']); //give the headers for the chart data
    dataEmployers?.forEach((v) => {
        employers.push([v.employer, v.amountOfOffers]);
    });

    const data = [
        grades,
        recruitmentTypes,
        categories,
        employers,
        salaryRanges,
    ];
    const options = [
        gradesChart,
        recruitmentTypeChart,
        mostPopularJobsOfferChart,
        mostPopularEmployersChart,
        salaryRangeChart,
    ];
    const chartTypes = [
        'PieChart',
        'PieChart',
        'PieChart',
        'PieChart',
        'ColumnChart',
    ];
    const titles = [
        'Wymagane doświadczenie',
        'Typy rekrutacji',
        'Najpopularniejsze kategorie ofert pracy',
        'Najpopularniejsi pracodawcy',
        'Ilość ogłoszeń według płac w zł',
    ];
    const chartType = chartTypes[chartNumber] as GoogleChartWrapperChartType;

    return (
        <div className="categoriesEmployers">
            <div className="div-home">
                <Button link={PATHS.register} text="Konto" />
                <Button link={PATHS.logout} text="Wyloguj się" />
                <Button
                    text="Poprzedni wykres"
                    onClick={() => {
                        setChartNumber((chartNumber - 1 + 5) % 5);
                    }}
                />
                <Button
                    text="Następny wykres"
                    onClick={() => {
                        setChartNumber((chartNumber + 1) % 5);
                    }}
                />
            </div>
            <div className="div-title">
                <h1>{titles[chartNumber]}</h1>
            </div>

            <div id="chart">
                <Chart
                    chartType={chartType}
                    data={data[chartNumber]}
                    options={options[chartNumber]}
                />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CategoriesEmployers;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './General.css';
import useData from '../../hooks/useData';
import { gradeData } from '../../models/grade';
import { recruitmentTypeData } from '../../models/recruitmentType';
import { salaryRangeData } from '../../models/salaryRange';
import { categories } from '../../models/categories';
import { employers } from '../../models/employers';
import { chartTypes, options, titles } from './chartData';
import { getPromisedData } from '../../utils/functions';
import Button from '../../Components/Button/button';
import { PATHS } from '../../utils/consts';
import { Chart, GoogleChartWrapperChartType } from 'react-google-charts';
import { Footer } from '../../Components/Footer/footer';
import recruitmentTypesFile from './text/recrutimentTypes.txt';
import gradesFile from './text/grades.txt';
import employersFile from './text/employers.txt';
import categoriesFile from './text/categories.txt';
import salaryRangesFile from './text/salaryRanges.txt';

const General = () => {
    const { getGradeData } = useData();
    const { getRecruitmentTypeData } = useData();
    const { getCategoriesData } = useData();
    const { getEmployersData } = useData();
    const { getSalaryRangeData } = useData();

    const navigate = useNavigate();

    const [dataGrade, setDataGrade] = useState<gradeData[]>();
    const [dataRecruitmentType, setDataRecruitmentType] =
        useState<recruitmentTypeData[]>();
    const [dataCategories, setDataCategories] = useState<categories[]>();
    const [dataEmployers, setDataEmployers] = useState<employers[]>();
    const [dataSalaryRange, setDataSalaryRange] = useState<salaryRangeData[]>();

    const [chartNumber, setChartNumber] = useState(0);
    const [typeNumber, setTypeNumber] = useState(0);

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
    grades.push(['Element', 'Ilość']); //give the headers for the chart data
    dataGrade?.forEach((v) => {
        grades.push([v.grade, v.amountOfOffers]);
    });

    const recruitmentTypes = [];
    recruitmentTypes.push(['Element', 'Ilość']); //give the headers for the chart data
    dataRecruitmentType?.forEach((v) => {
        recruitmentTypes.push([v.recruitmentType, v.count]);
    });

    const categories = [];
    categories.push(['Element', 'Ilość']); //give the headers for the chart data
    dataCategories?.forEach((v) => {
        categories.push([v.category, v.amountOfOffers]);
    });

    const employers = [];
    employers.push(['Element', 'Ilość']); //give the headers for the chart data
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
    const [gradesDescription, setgradesDescription] = useState('');
    const [recruitmentTypesDescription, setrecruitmentTypesDescription] =
        useState('');
    const [categoriesDescriptions, setcategoriesDescriptions] = useState('');
    const [employersDescription, setemployersDescription] = useState('');
    const [salaryRangesDescription, setsalaryRangesDescription] = useState('');
    // Multiply for more descriptions
    fetch(gradesFile)
        .then((r) => r.text())
        .then((text) => {
            setgradesDescription(text);
            console.log('text decoded:', text);
        });
    //
    fetch(recruitmentTypesFile)
        .then((r) => r.text())
        .then((text) => {
            setrecruitmentTypesDescription(text);
            console.log('text decoded:', text);
        });
    fetch(categoriesFile)
        .then((r) => r.text())
        .then((text) => {
            setcategoriesDescriptions(text);
            console.log('text decoded:', text);
        });
    fetch(employersFile)
        .then((r) => r.text())
        .then((text) => {
            setemployersDescription(text);
            console.log('text decoded:', text);
        });
    fetch(salaryRangesFile)
        .then((r) => r.text())
        .then((text) => {
            setsalaryRangesDescription(text);
            console.log('text decoded:', text);
        });
    const dataDescriptions = [
        gradesDescription,
        recruitmentTypesDescription,
        categoriesDescriptions,
        employersDescription,
        salaryRangesDescription,
    ];
    console.log(dataDescriptions);
    console.log(recruitmentTypesDescription);
    const chartType = chartTypes[typeNumber] as GoogleChartWrapperChartType;

    return (
        <div className="categoriesEmployers">
            <div className="div-home">
                <Button
                    text="Wyloguj się"
                    onClick={() => {
                        localStorage.clear();
                        navigate(PATHS.logout);
                    }}
                />
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
            {/* start */}
            <div className="div-title">
                <div className="chartTitle">{titles[chartNumber]}</div>
                <div className="spaceBetween"> </div>
                <div className="figure1">
                    <div className="parallelogram1"></div>
                    <div className="rectangle1">
                        <div className="rectangleTitle">
                            {dataDescriptions[chartNumber].split('\n')[0]}
                        </div>
                        <div className="rectangleAdvantagesTitle">Zalety</div>
                        <div className="rectangleAdvantages">
                            {dataDescriptions[chartNumber]
                                .split('\n')
                                .slice(2, 5)}
                        </div>
                        <div className="rectangleDefectsTitle">Wady</div>
                        <div className="rectangleDefects">
                            {dataDescriptions[chartNumber]
                                .split('\n')
                                .slice(6, 9)}
                        </div>
                    </div>
                    <div className="triangle-down1"></div>
                </div>
                <div className="figure2">
                    <div className="parallelogram2"></div>
                    <div className="rectangle2">
                        <div className="rectangleTitle">
                            {dataDescriptions[chartNumber].split('\n')[9]}
                        </div>
                        <div className="rectangleAdvantagesTitle">Zalety</div>
                        <div className="rectangleAdvantages">
                            {dataDescriptions[chartNumber]
                                .split('\n')
                                .slice(11, 14)}
                        </div>
                        <div className="rectangleDefectsTitle">Wady</div>
                        <div className="rectangleDefects">
                            {dataDescriptions[chartNumber]
                                .split('\n')
                                .slice(15, 18)}
                        </div>
                    </div>
                    <div className="triangle-down2"></div>
                </div>
                <div className="figure3">
                    <div className="parallelogram3"></div>
                    <div className="rectangle3">
                        <div className="rectangleTitle">
                            {dataDescriptions[chartNumber].split('\n')[18]}
                        </div>
                        <div className="rectangleAdvantagesTitle">Zalety</div>
                        <div className="rectangleAdvantages">
                            {dataDescriptions[chartNumber]
                                .split('\n')
                                .slice(20, 23)}
                        </div>
                        <div className="rectangleDefectsTitle">Wady</div>
                        <div className="rectangleDefects">
                            {dataDescriptions[chartNumber]
                                .split('\n')
                                .slice(24, 27)}
                        </div>
                    </div>
                    <div className="triangle-down3"></div>
                </div>
            </div>
            <div id="div-charts">
                <div id="chart">
                    <Chart
                        chartType={chartType}
                        data={data[chartNumber]}
                        options={options[chartNumber]}
                    />
                </div>
            </div>
            <div id="panels"></div>
            {/* end */}
            <div className="div-change-type">
                <Button
                    text="Zmień typ wykresu"
                    onClick={() => {
                        setTypeNumber((typeNumber + 1) % 2);
                    }}
                />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default General;

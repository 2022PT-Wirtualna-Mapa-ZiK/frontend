import './home.css';
import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import useData from '../../hooks/useData';
import { workModeData } from '../../models/workMode';
import { contractTypeData } from '../../models/contractType';
import { contractTypeChart, workModeChart } from './charts';
import Button from '../../Components/Button/button';
import { PATHS } from '../../utils/consts';
import { getPromisedData } from '../../utils/functions';
import { Footer } from '../../Components/Footer/footer';

const Home = () => {
    const professions = [
        { description: 'Informatyk', key: 0 },
        { description: 'Biotechnolog', key: 1 },
        { description: 'Logistyk', key: 2 },
        { description: 'Elektryk', key: 3 },
        { description: 'Lekarz', key: 4 },
        { description: 'Trener', key: 5 },
        { description: 'Menadżer finansów', key: 6 },
        { description: 'Analityk', key: 7 },
        { description: 'Projekant grafiki', key: 8 },
        { description: 'Badacz', key: 9 },
    ];
    const [sizeToday, setSizeToday] = useState(0);
    const [sizeYesterday, setSizeYesterday] = useState(0);
    const [sizeBeforeYesterday, setSizeBeforeYesterday] = useState(0);

    const [dataWorkMode, setDataWorkMode] = useState<workModeData[]>();
    const [dataContractType, setDataContractType] =
        useState<contractTypeData[]>();

    const { getWorkModeData } = useData();
    const { getContractTypeData } = useData();
    const { AmountFromDate } = useData();

    useEffect(() => {
        const getDaysAmount = async () => {
            const today = await AmountFromDate('17/04/2023');
            const yesterday = await AmountFromDate('16/04/2023');
            const beforeYesterday = await AmountFromDate('15/04/2023');

            setSizeToday(today.data as number);
            setSizeYesterday(yesterday.data as number);
            setSizeBeforeYesterday(beforeYesterday.data as number);
        };
        getPromisedData(getWorkModeData()).then((x) => {
            setDataWorkMode(x);
        });
        getPromisedData(getContractTypeData()).then((x) => {
            setDataContractType(x);
        });

        getDaysAmount();
    }, []);

    const workModes = [];
    workModes.push(['Element', 'Density']); //give the headers for the chart data
    dataWorkMode?.forEach((v) => {
        workModes.push([v.workMode, v.amountOfOffers]);
    });

    const contractTypes = [];
    contractTypes.push(['Element', 'Density']);
    dataContractType?.forEach((v) => {
        contractTypes.push([v.agreement, v.amountOfOffers]);
    });

    return (
        <div className="home">
            <div className="center">
                <div className="backpack"></div>
                <div className="target"></div>
            </div>
            <div className="div-home"></div>
            <div className="div-home">
                <Button link={PATHS.register} text="Zarejestruj się" />
                <Button link={PATHS.login} text="Zaloguj się" />
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

            <div className="home-title">
                <h1>Aktualnie najczęściej wyszukiwane zawody:</h1>
            </div>
            <div id="chart1">
                <Chart
                    chartType="PieChart"
                    data={contractTypes}
                    options={contractTypeChart}
                />
            </div>
            <div id="chart2">
                <Chart
                    chartType="PieChart"
                    data={workModes}
                    options={workModeChart}
                />
            </div>
            <div className="list">
                <ol>
                    {/* display each value(profession) from list */}
                    {professions.map((profess) => {
                        return <li key={profess.key}>{profess.description}</li>;
                    })}
                </ol>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;

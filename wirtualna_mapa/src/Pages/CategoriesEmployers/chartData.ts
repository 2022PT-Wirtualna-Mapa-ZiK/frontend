import {
    gradesChart,
    mostPopularEmployersChart,
    mostPopularJobsOfferChart,
    recruitmentTypeChart,
    salaryRangeChart,
} from './charts';

export const options = [
    gradesChart,
    recruitmentTypeChart,
    mostPopularJobsOfferChart,
    mostPopularEmployersChart,
    salaryRangeChart,
];
export const chartTypes = [
    'PieChart',
    'PieChart',
    'PieChart',
    'PieChart',
    'ColumnChart',
];
export const titles = [
    'Wymagane doświadczenie',
    'Typy rekrutacji',
    'Najpopularniejsze kategorie ofert pracy',
    'Najpopularniejsi pracodawcy',
    'Ilość ogłoszeń według płac w zł',
];

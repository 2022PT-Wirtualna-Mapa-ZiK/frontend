const url = "https://wmzik-webapi.proudfield-39a6685d.westeurope.azurecontainerapps.io"
export const API_URL =`${url}/api/v1`

export const ENDPOINTS = {
    register: 'user/register',
    login: 'user/login',

    gradeData: '/data/grades',
    recruitmentTypeData: '/data/recruitmentTypeCount',
    workModeData: '/data/workModes',
    contractTypeData: '/data/agreementTypes',
    offersFromCertainDay: '/data/offersFromCertainDay',
    salaryRangeData: '/data/salaryRange',
    categories: '/data/mostCommonCategories',
    employers: '/data/mostEmployersWithOffers',
};

export const PATHS = {
    welcome: '/',
    login: '/login',
    logout: '/home',
    register: '/register',
    home: '/home',
    general: '/general',
};

export const LOCAL_STORAGE = {
    registered: 'registered',
    loggedIn: 'loggedIn',
};

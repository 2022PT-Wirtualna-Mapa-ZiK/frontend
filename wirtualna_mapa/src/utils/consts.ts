const url = window.location;
export const API_URL =
  url.port !== ""
    ? `${url.protocol}//${url.hostname}:8000/api/v1/`
    : `${url.origin}/api/v1`;

export const ENDPOINTS = {
  register: "user/register",
  login: "user/login/",

  gradeData: "/data/grades",
  recruitmentTypeData: "/data/recruitmentTypeCount",
  workModeData: "/data/workModes",
  contractTypeData: "/data/agreementTypes",
  offersFromCertainDay: "/data/offersFromCertainDay",
  salaryRangeData: "/data/salaryRange",
  categories: "/data/mostCommonCategories",
  employers: "/data/mostEmployersWithOffers",
};

export const PATHS = {
  welcome: "/",
  login: "/login",
  logout: "/home",
  register: "/register",
  home: "/home",
  categoriesEmployers: "/categoriesEmployers",
};

export const LOCAL_STORAGE = {
  registered: "registered",
  loggedIn: "loggedIn",
};

const url = window.location
export const API_URL =
  url.port !== '' ? `${url.protocol}//${url.hostname}:8000/api/v1/` : `${url.origin}/api/v1`

export const ENDPOINTS = {
  register: 'user/register',
  login: 'user/login/',
  getScrappedData: 'data/scrappedData/',  
}

export const PATHS = {
    welcome: '/',
    login: '/login',
    register: '/register',
    home: '/home'
  }

export const LOCAL_STORAGE = {
    registered: 'registered',
    loggedIn: 'loggedIn',
  }
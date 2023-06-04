import { useNavigate } from 'react-router-dom'
import { IRegister } from '../models/requests/register'
import { IServerResponse } from '../models/responses/serverResponse'
import { ENDPOINTS, LOCAL_STORAGE, PATHS } from '../utils/consts'
import axiosAuth from '../setup/axios/authInstance'
import { ILogin } from '../models/requests/login'

const useAuth = () => {
  const navigate = useNavigate()

  const login = async (data: ILogin): Promise<IServerResponse> => {
    try {
      console.log(data);
      await axiosAuth.post(ENDPOINTS.login, {
        email: data.email,
        password: data.password,
      }, {headers: {
        'Content-Type': 'application/json',
      }})
      navigate(PATHS.categoriesEmployers)
      localStorage.setItem(LOCAL_STORAGE.loggedIn, 'loggedIn');

      return { succeed: true }
    } catch (error) {
      return { succeed: false, errorMessage: 'Coś poszło nie tak.' }
    } 
  }

  const register = async (data: IRegister): Promise<IServerResponse> => {
    try {
      console.log(data);
      await axiosAuth.post(ENDPOINTS.register, {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        confPassword: data.confPassword,
      }, {headers: {
        'Content-Type': 'application/json'
      }})

      navigate(PATHS.login)
      localStorage.setItem(LOCAL_STORAGE.registered, 'registered');

      return { succeed: true }
    } catch (error) {
      return { succeed: false, errorMessage: 'Coś poszło nie tak.' }
    } 
  }

  return {
    register,
    login
  }
}

export default useAuth

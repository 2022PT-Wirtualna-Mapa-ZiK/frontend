import { useNavigate } from 'react-router-dom';
import { IRegister } from '../models/requests/register';
import { IServerResponse } from '../models/responses/serverResponse';
import { ENDPOINTS, LOCAL_STORAGE, PATHS } from '../utils/consts';
import axiosAuth from '../setup/axios/authInstance';
import { ILogin } from '../models/requests/login';
import { Buffer } from 'buffer';

const useAuth = () => {
    const navigate = useNavigate();

    const login = async (data: ILogin): Promise<IServerResponse> => {
        try {
            console.log(
                'Basic ' +
                    Buffer.from(
                        data.email + ':' + data.password,
                        'utf8'
                    ).toString('base64')
            );
            const basicAuth =
                'Basic ' +
                Buffer.from(data.email + ':' + data.password, 'utf8').toString(
                    'base64'
                );

            await axiosAuth.post(ENDPOINTS.login, {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: basicAuth,
                },
            });

            navigate(PATHS.categoriesEmployers);
            localStorage.setItem(LOCAL_STORAGE.loggedIn, 'loggedIn');

            return { succeed: true };
        } catch (error) {
            return {
                succeed: false,
                errorMessage: 'Podany użytkownik nie istnieje',
            };
        }
    };

    const register = async (data: IRegister): Promise<IServerResponse> => {
        try {
            await axiosAuth.post(
                ENDPOINTS.register,
                {
                    name: data.name,
                    surname: data.surname,
                    email: data.email,
                    password: data.password,
                    confPassword: data.confPassword,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            navigate(PATHS.login);
            localStorage.setItem(LOCAL_STORAGE.registered, 'registered');

            return { succeed: true };
        } catch (error) {
            return { succeed: false, errorMessage: 'Coś poszło nie tak.' };
        }
    };

    return {
        register,
        login,
    };
};

export default useAuth;

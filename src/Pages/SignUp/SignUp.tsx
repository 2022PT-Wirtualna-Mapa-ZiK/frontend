import { useState } from 'react';
import './style.css';
import { SignUpState } from '../../models/signUpState';
import useAuth from '../../hooks/useAuth';
import Button from '../../Components/Button/button';
import { PATHS } from '../../utils/consts';

const Regex = RegExp(
    /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

export const SignUp = () => {
    const form = 'registerForm';
    const initialState: SignUpState = {
        name: '',
        surname: '',
        email: '',
        password: '',
        confPassword: '',
        errors: {
            name: '',
            surname: '',
            email: '',
            password: '',
            confPassword: '',
        },
    };

    const { register } = useAuth();
    const [state, setState] = useState(initialState);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event: any) => {
        const { name, value } = event.target;
        const errors = { ...state.errors };

        switch (name) {
            case 'name':
                value.length == 0
                    ? (errors.name = 'To pole jest wymagane')
                    : '';
                break;
            case 'surname':
                value.length == 0
                    ? (errors.surname = 'To pole jest wymagane')
                    : '';
                break;
            case 'email':
                value.length == 0
                    ? (errors.email = 'To pole jest wymagane')
                    : '';
                break;
            case 'password':
                value.length == 0
                    ? (errors.password = 'To pole jest wymagane')
                    : '';
                break;
            case 'confPassword':
                value.length == 0
                    ? (errors.confPassword = 'To pole jest wymagane')
                    : '';
                break;
            default:
                break;
        }
        setState({ ...state, errors, [name]: value });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const errors = { ...state.errors };

        switch (name) {
            case 'name':
                errors.name =
                    value.length < 3 ? 'Imie musi mieć minimum 3 znaki!' : '';
                break;
            case 'surname':
                errors.surname =
                    value.length < 3
                        ? 'Nazwisko musi mieć minimum 3 znaki!'
                        : '';
                break;
            case 'email':
                errors.email = Regex.test(value)
                    ? ''
                    : 'Email jest nieprawidłowy!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Hasło musi mieć długość minimum 8 znaków!'
                        : '';
                break;
            case 'confPassword':
                errors.confPassword =
                    value.password === value.confPassword
                        ? ''
                        : 'Hasła muszą być identyczne';
                break;
            default:
                break;
        }
        setState({ ...state, errors, [name]: value });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let validity = true;
        Object.values(state.errors).forEach((val) =>
            val.length > 0 ? (validity = false) : null
        );
        if (validity) {
            const { name, surname, email, password, confPassword } = state;
            const response = await register({
                name,
                surname,
                email,
                password,
                confPassword,
            });
            if (response.errorMessage) {
                errors.confPassword = response.errorMessage;
                setState({ ...state, errors });
            }
        }
    };

    const { errors } = state;
    return (
        <div className="wrapper">
            <div className="back">
                <div className="circle-pink"></div>
                <div className="circle-small"></div>
                <div className="triangle">
                    <div className="inside"></div>
                </div>
                <div className="circle-blue"></div>
                <div className="center">
                    <div className="backpack"></div>
                    <div className="megaphone"></div>
                    <div className="target"></div>
                </div>
                <div className="form-wrapper">
                    <br />
                    <h2>Zarejestruj się</h2>
                    <br />
                    <form onSubmit={handleSubmit} id={form}>
                        <div className="name">
                            <label htmlFor="name">Imię:</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onClick={handleClick}
                            />
                            {state.name.length == 0 || (
                                <span style={{ color: 'red' }}>
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="surname">
                            <label htmlFor="surname">Nazwisko:</label>
                            <input
                                type="text"
                                name="surname"
                                onChange={handleChange}
                                onClick={handleClick}
                            />
                            {state.surname.length == 0 || (
                                <span style={{ color: 'red' }}>
                                    {errors.surname}
                                </span>
                            )}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Adres Email:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onClick={handleClick}
                            />
                            {state.email.length == 0 || (
                                <span style={{ color: 'red' }}>
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Hasło:</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onClick={handleClick}
                            />
                            {state.password.length == 0 || (
                                <span style={{ color: 'red' }}>
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className="confpassword">
                            <label htmlFor="confpassword">Powtórz hasło</label>
                            <input
                                type="password"
                                name="confPassword"
                                onChange={handleChange}
                                onClick={handleClick}
                            />
                            {state.confPassword.length == 0 || (
                                <span style={{ color: 'red' }}>
                                    {errors.confPassword}
                                </span>
                            )}
                        </div>

                        <Button
                            text="Zarejestruj się"
                            form={form}
                            className="signUp"
                            onClick={handleClick}
                        />
                    </form>

                    <p className="have-acc">Masz już konto?</p>
                    <Button
                        link={PATHS.login}
                        text="Zaloguj się"
                        className="signIn"
                    />
                </div>
            </div>
        </div>
    );
};

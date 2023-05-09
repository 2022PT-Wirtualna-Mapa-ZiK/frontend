/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './signin.css';
import { Footer } from '../../Components/Footer/footer';
import Button from '../../Components/Button/button';
import { SignInState } from '../../models/signInState';
const Regex = RegExp(
    /^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i
);

const SignIn = () => {
    const form = 'loginForm';
    const initialState: SignInState = {
        email: '',
        password: '',
        errors: {
            email: '',
            password: '',
        },
    };
    const { login } = useAuth();
    const [state, setState] = useState(initialState);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        const errors = { ...state.errors };

        switch (name) {
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
            default:
                break;
        }
        setState({ ...state, errors, [name]: value });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let validity = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.values(state.errors).forEach((val: any) =>
            val.length > 0 ? (validity = false) : null
        );
        if (validity) {
            const { email, password } = state;
            const response = await login({ email, password });
            if (response.errorMessage) {
                errors.password = response.errorMessage;
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
                    <h2>Zaloguj się</h2>
                    <br />
                    <form onSubmit={handleSubmit} id={form}>
                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                            />
                            {errors.email.length > 0 && (
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
                            />
                            {errors.password.length > 0 && (
                                <span style={{ color: 'red' }}>
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <Button
                            text="Zaloguj się"
                            form={form}
                            className="signIn"
                        />
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;

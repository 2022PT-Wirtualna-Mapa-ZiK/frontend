/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Buffer } from 'buffer';
import './signin.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/button';
import { PATHS } from '../../utils/consts';

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={{ email: '', password: '', databaseError: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log('Logging in', values);
                    setSubmitting(false);

                    //encode to base64
                    const basicAuth =
                        'Basic ' +
                        Buffer.from(
                            values.email + ':' + values.password,
                            'utf8'
                        ).toString('base64');
                    fetch('http://localhost:8000/api/v1/user/login', {
                        method: 'GET',
                        headers: {
                            authorization: basicAuth,
                        },
                    })
                        .then((response) => {
                            if (response.status === 200) {
                                navigate(PATHS.categoriesEmployers);
                            } else {
                                console.log(
                                    'There is no such user in the database'
                                );
                                values.databaseError =
                                    'Podany użytkownik nie istnieje';
                            }
                            setSubmitting(true);
                        })
                        .then((data) => {
                            console.log(data);
                            localStorage.setItem(
                                'loginKey',
                                JSON.stringify(data)
                            );
                        })
                        .catch((err) => {
                            console.log(err);
                            values.databaseError =
                                'Brak połączenia z bazą danych';
                        });
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email().required('Required'),
                password: Yup.string()
                    .required('Wymagane')
                    .min(8, 'Hasło musi mieć minimum 8 znaków')
                    .matches(/(?=.*[0-9])/, 'Hasło musi zawierać liczbę'),
            })}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;
                return (
                    <div className="wrapper-login">
                        <div className="back-login">
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
                                <form
                                    className="form-wrapper-login"
                                    onSubmit={handleSubmit}
                                    id="loginForm"
                                >
                                    <div className="input-wrapper">
                                        <br />
                                        <h2>Login</h2>
                                        <br />

                                        <label htmlFor="email">Email</label>
                                        <input
                                            name="email"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={[
                                                errors.email &&
                                                    touched.email &&
                                                    'error',
                                            ].join('')}
                                        />

                                        {errors.email && touched.email && (
                                            <div className="input-feedback">
                                                {errors.email}
                                            </div>
                                        )}
                                        <label htmlFor="email">
                                            Hasło{' '}
                                            <span>
                                                <a href="/retrieve">
                                                    Zapomniałeś hasła?
                                                </a>
                                            </span>
                                        </label>

                                        <input
                                            name="password"
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={[
                                                errors.password &&
                                                    touched.password &&
                                                    'error',
                                            ].join('')}
                                        />
                                        {errors.password &&
                                            touched.password && (
                                                <div className="input-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                    </div>

                                    <Button text="Login" form="loginForm" />
                                    <div className="database-feedback">
                                        {values.databaseError}
                                    </div>
                                    <p className="new-acc">Nie masz konta?</p>
                                    <Button
                                        link={PATHS.register}
                                        text="Zarejestruj się"
                                        className="register"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default SignIn;

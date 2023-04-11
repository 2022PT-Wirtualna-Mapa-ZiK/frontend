import React, { useState } from 'react';
import './style.css';
import SignUpState from '../../models/signUpState';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { PATHS } from '../../utils/consts';

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

export const SignUp = () => {
  const initialState : SignUpState = {
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
        confPassword: ''
     }
  };
  const {register} = useAuth();
  const [state, setState] = useState(initialState);

  const handleChange = (event:any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = { ...state.errors };
    
    switch (name) {
      case 'name':
        errors.name = value.length < 3 ? 'Imie musi mieć minimum 3 znaki!' : '';
        break;
      case 'surname':
        errors.surname = value.length < 3 ? 'Nazwisko musi mieć minimum 3 znaki!' : '';
        break;
      case 'email':
        errors.email = Regex.test(value) ? '' : 'E-mail jest nieprawidłowy!';
        break;
      case 'password':
        errors.password = value.length < 8 ? 'Hasło musi mieć długość minimum 8 znaków!' : '';
        break;
      case 'confPassword':
        errors.confPassword = value.length < 8 ? 'Hasło musi mieć długość minimum 8 znaków!' : '';
        break;
      default:
        break;
    }
    setState({ ...state, errors, [name]: value });
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    let validity = true;
    Object.values(state.errors).forEach((val) =>
     val.length > 0 ? validity = false : null
     );
   if (validity) {
      const {name, surname, email, password, confPassword} = state;
      const response = await register({ name, surname, email, password, confPassword });
      if (response.errorMessage){
         errors.confPassword = response.errorMessage
         setState({ ...state, errors});
      }
    }
  };
  


    const navigate = useNavigate();
    const login = () => {
      navigate(PATHS.login);}

      
  const { errors } = state;
  return (
    
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Zarejestruj się</h2>
        <br></br><br></br>
        <form onSubmit={handleSubmit} noValidate>
          <div className='name'>
            <label htmlFor="name">Imię:</label>
            <input type='text' name='name' onChange={handleChange} />
            {errors.name.length > 0 && <span style={{ color: 'red' }}>{errors.name}</span>}
          </div>
          <div className='surname'>
            <label htmlFor="surname">Nazwisko:</label>
            <input type='text' name='surname' onChange={handleChange} />
            {errors.surname.length > 0 && <span style={{ color: 'red' }}>{errors.surname}</span>}
          </div>
          <div className='email'>
            <label htmlFor="email">Adres E-mail:</label>
            <input type='email' name='email' onChange={handleChange} />
            {errors.email.length > 0 && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
          <div className='password'>
            <label htmlFor="password">Hasło:</label>
            <input type='password' name='password' onChange={handleChange} />
            {errors.password.length > 0 && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>
          <div className='confpassword'>
               <label htmlFor="confpassword">Podaj jeszcze raz hasło:</label>
               <input type='password' name='confPassword' onChange={handleChange}/>
               {errors.confPassword.length > 0 &&  <span style={{color: "red"}}>{errors.confPassword}</span>}
               </div>              
         <div className='submit'>
            <button onClick={login}>Zarejestruj się</button>
         </div>
          </form>
         <h3>Masz już konto?</h3>
         <div className='submit'>
         <button onClick={login}>Zaloguj się!</button>
         </div>
      </div>
   </div>
  );
 }
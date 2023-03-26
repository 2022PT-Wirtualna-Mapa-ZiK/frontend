import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './signin.css';
import { Navigate } from 'react-router-dom';

const SignIn = () => (
  <Formik initialValues={{email:"", password:"",databaseError:""}}
   onSubmit={(values, {setSubmitting})=>{
    setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);


    fetch("http://localhost:8000/api/v1/user/login", {
      method: "POST",
      headers: {"email": values.email, "password": values.password}
    }).then((response) =>{
      if(response.status === 200){
        window.open("/welcomepage");
      }
      else
      {
        console.log("There is no such user in the database");
        values.databaseError="There is no such user in the database";
      }
      setSubmitting(true);
    }).then(data => localStorage.setItem('loginKey', JSON.stringify(data)))
    .catch(err => {console.log(err);
    values.databaseError="No database connection"});


  }, 500);}}
   validationSchema = {Yup.object().shape({
    email:Yup.string()
    .email()
    .required("Required"),
    password:Yup.string()
    .required("Required")
    .min(8, "Password should be at least 8 characters long")
    .matches(/(?=.*[0-9])/, "Password must contain a number")
  })}
   >
    {props =>{
      const{
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      }=props;
      return (
        <div className="wrapper">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={[errors.email && touched.email && "error"].join('')}
          />
          
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={[errors.password && touched.password && "error"].join('')}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <a href='/retrieve'>Forgot password?</a>
          <button type="submit" onSubmit={function(e) {
              
            }}>Login</button>
          <div className="database-feedback">{values.databaseError}</div>
        </form>
        </div>
      );
    }}
   </Formik>
);

export default SignIn;
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import './signin.css';


const SignIn = () => (
  <Formik initialValues={{email:"", password:""}}
   onSubmit={(values, {setSubmitting})=>{
    setTimeout(() => {
    console.log("Logging in", values);
    setSubmitting(false);
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
          <button type="submit" disabled={isSubmitting}>Login</button>
        </form>
        </div>
      );
    }}
   </Formik>
);

export default SignIn;
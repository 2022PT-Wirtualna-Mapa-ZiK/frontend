import { link } from "fs";
import path from "path";
import React from "react";
import './style.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


//utworzenie formularza logowania

export class Login extends React.Component{

    handleChange = (event : any) => {}
  handleSubmit = (event : any) => {}
    render() {
        return (
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Log In</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={this.handleChange}/>
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' onChange={this.handleChange}/>
                  </div>
                  <a href='/retrieve'>Forgot password?</a>
                  <div className='submit'>
                     <button type="submit">Log In</button>
                  </div>
             </form>
         </div>
      </div>
     );
    }
}
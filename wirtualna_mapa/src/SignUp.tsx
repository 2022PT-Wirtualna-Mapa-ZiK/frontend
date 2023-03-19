import React from "react";
import './style.css';
export class SignUp extends React.Component{
    handleChange = (event : any) => {}
  handleSubmit = (event : any) => {}
    render() {
        return (
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Sign Up</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={this.handleChange}/>
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' onChange={this.handleChange}/>
                  </div>   
                  <div className='password'>
                     <label htmlFor="password">Re-type Password</label>
                     <input type='password' name='password' onChange={this.handleChange}/>
                  </div>
                  <label>already got an account?</label>
                  <a href='/login'>Log in</a>
                  <div className='submit'>
                     <button type="submit">Register Me</button>
                  </div>
             </form>
         </div>
      </div>
     );
    }
}
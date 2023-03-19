import React, { FormEventHandler } from "react";
import './style.css';
import InputField from "../../Components/InputField/InputField";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";


export class SignUp extends React.Component{
   
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined;

    render() {
        return (
          <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Sign Up</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  
                  <InputField type="email" label="email" />
                  <InputField type="password" label="password" />
                  <InputField type="password" label="Password confirmation" /> 

                  <SubmitButton class="submit" label="Register Me" />                  

             </form>
         </div>
      </div>
     );
    }
}
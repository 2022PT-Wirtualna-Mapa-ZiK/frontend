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
               <h2>Create new account</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  
                  <InputField type="email" label="name" />
                  <InputField type="email" label="surname" />
                  <InputField type="email" label="Email" />
                  <InputField type="password" label="password" />
                  <InputField type="password" label="Confirm password" /> 

                  <SubmitButton class="submit" label="Register Me" />                  
                  <h3>Already have account?</h3>
                  <SubmitButton class="submit" label="Sign In!" />   
             </form>
         </div>
      </div>
     );
    }
}
import React from "react";
import './style.css'

interface SignUpProps {
  name?: any;
  value?: any;
}
interface SignUpState {
  name : string,
  surname : string,
  email : string,
  password : string,
  confpassword : string,
  errors : {
    name : string,
    surname : string,
    email : string,
    password : string,
    confpassword : string,
  }
}
const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);
const Regex2 = RegExp(/^[A-Za-z\s]/);
export class SignUp extends React.Component<SignUpProps, SignUpState>
{
  

  constructor(props: SignUpProps) {
    super(props);
    const initialState = {
  name : '',
  surname : '',
  email : '',
  password : '',
  confpassword : '',
  errors : {
    name : '',
    surname : '',
    email : '',
    password : '',
    confpassword : '',
     }
    }
    this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange = (event : any) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'name':
         errors.name =  value.length < 5? 'Name must be five characters long!': '';
         break;
         case 'surname':
          errors.surname = value.length < 5? 'Surname must be five characters long!': '';
          break;
      case 'email':
         errors.email = Regex.test(value)? '': 'Email is not valid!';
         break;
      case 'password':
         errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
         break;
         case 'confpassword':
         errors.confpassword = value.length < 8 ? 'RePassword must be eight characters long!': '';
         break;
      default:
        break;
    }
  this.setState(Object.assign(this.state, { errors,[name]: value }));
  console.log(this.state.errors);
  }
  handleSubmit = (event : any) => {
    event.preventDefault();
   let validity = true;
   Object.values(this.state.errors).forEach(
     (val) => val.length > 0 && (validity = false)
   );
   if(validity == true){
      console.log("Registering can be done");
   }else{
      console.log("You cannot be registered!!!")
   }
  }

  render() {
    const {errors} = this.state   
     return (
       <div className='wrapper'>
         <div className='form-wrapper'>
            <h2>Sign Up</h2>
            <form onSubmit={this.handleSubmit} noValidate >
            <div className='name'>
                  <label htmlFor="name">Name</label>
                  <input type='text' name='name' onChange=            {this.handleChange}/>
                  {errors.name.length > 0 &&  <span style={{color: "red"}}>{errors.name}</span>}
               </div>
               <div className='surname'>
                  <label htmlFor="surname">Surname</label>
                  <input type='text' name='surname' onChange=            {this.handleChange}/>
                  {errors.surname.length > 0 &&  <span style={{color: "red"}}>{errors.surname}</span>}
               </div>
               <div className='email'>
                  <label htmlFor="email">Email</label>
                  <input type='email' name='email' onChange={this.handleChange}/>
                  {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
               </div>
               <div className='password'>
                  <label htmlFor="password">Password</label>
                  <input type='password' name='password' onChange={this.handleChange}/>
                  {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
               </div>   
               <div className='confpassword'>
                  <label htmlFor="confpassword">Retype Password</label>
                  <input type='confpassword' name='confpassword' onChange={this.handleChange}/>
                  {errors.confpassword.length > 0 &&  <span style={{color: "red"}}>{errors.confpassword}</span>}
               </div>              
               <div className='submit'>
                  <button>Register Me</button>
               </div>
               <h3>Already have account?</h3>
               <div className='submit'>
                  <button>Sign In!</button>
               </div>
          </form>
      </div>
   </div>
  );
 }
} 

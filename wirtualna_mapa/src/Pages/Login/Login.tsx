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
<<<<<<< HEAD:wirtualna_mapa/src/Login.tsx
}
=======
  })
);

//state type

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
    console.log(`User name: ${state.username}, User password: ${state.password}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <h1></h1>
        <CardHeader className={classes.header} title="Zaloguj się" />
        <CardContent>
          <div>
            <TextField error={state.isError} fullWidth id="username" type="email"label="Username"
                  placeholder="Username" margin="normal" onChange={handleUsernameChange}
                  onKeyPress={handleKeyPress}
            />
            <TextField error={state.isError} fullWidth id="password" type="password" label="Password"
                placeholder="Password" margin="normal" helperText={state.helperText} onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="large"  color="secondary" className={classes.loginBtn}
                onClick={handleLogin}  disabled={state.isButtonDisabled}>
            Login
          </Button>
        </CardActions>
        <CardActions>
          <Button variant="contained" size="large" color="secondary" 
              className={classes.loginBtn} onClick={handleLogin}>
            Utwórz konto
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Login;
>>>>>>> dev:wirtualna_mapa/src/Pages/Login/Login.tsx

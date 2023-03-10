import React,{useContext,useEffect} from 'react'
import './login.css';

import {GoogleLogin} from "react-google-login"
// import {clientId} from "../data/Data" 

import { UserContext } from '../context/UserProvider';
import { useHistory } from 'react-router-dom';
const Login = () => {
  let history = useHistory();
  const {setUserLogged} = useContext(UserContext)
  const onLoginSuccess= async (res)=>{
    // console.log("Login SuccessFull ",res.profileObj);
    await setUserLogged(res.profileObj);
}

const onLoginFailure=(err)=>{
    console.log("Login Failure ",err)
}
useEffect(() => {
  history.push('/');
},[])
  //  console.log("clientID ",process.env.REACT_APP_CLIENT_Id);
  return (
    <div className='loginPage'>
        <div className="loginContainer">
          <h1>Welcome to the online Contact List Saving Website</h1>
          <h3>To use the Website easily, Please Login First</h3>
           <GoogleLogin className='googleLoginButton'  clientId='166106136902-l64ef1ufmhamtsrtsalt17bi5e1tg3ck.apps.googleusercontent.com' isSignedIn={true} buttonText="Login" onAutoLoadFinished = {true} onSuccess={onLoginSuccess} onFailure={onLoginFailure} cookiePolicy={'single_host_origin'} ></GoogleLogin>
        </div>
    </div>
  )
}

export default Login
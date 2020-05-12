import React, {useState} from "react";
import { connect } from "react-redux";
import {useHistory, withRouter} from "react-router-dom";

import { LoginFormButton, LoginTitle } from "../styles/buttons";

import { loginFunction } from "../store/actions/loginAction";

import {
  BaseContainer,
  LoginTopWrapper,
  MiddleContainer,
  UsernamePasswordWrapper, VertificationFormWrapperLeft
} from "../styles/containers";
import {BaseForm, FormSignUp, UsernamePasswordForm} from "../styles/form";



const Login = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [response, setResponse] = useState(false)
    const history = useHistory();

    const loginHandler = async e => {
        e.preventDefault();

        const data = {
          email: username,
          password: password
        };

        const res = await props.dispatch(loginFunction(data));

        if (res === 'not ok'){
            return setResponse(true)
        } else {
            history.push('/')
        }
    }


    return (
      <>
        <MiddleContainer>
          <LoginTopWrapper>
            <LoginTitle>LOGIN</LoginTitle>
          </LoginTopWrapper>
            <FormSignUp id="login-form" onSubmit={loginHandler}>
          <UsernamePasswordWrapper>

            <UsernamePasswordForm
              type="text"
              onChange = {e => setUsername(e.currentTarget.value)}
              value={username}
              placeholder="Username"/>
            <UsernamePasswordForm
              type="password"
              value={password}
              onChange = {e => setPassword(e.currentTarget.value)}
              placeholder="Password"/>
              <p>{(response === true) ? <p style={{fontSize:'18px', padding:'2%',color: 'red',backgroundColor:'rgba(255,0,0,0.2)'}}>Incorrect Username or Password. Please try again.</p>:''}</p>

              <LoginFormButton form="login-form" type="submit" onClick={loginHandler}>Login</LoginFormButton>

          </UsernamePasswordWrapper>
            </FormSignUp>
        </MiddleContainer>
      </>
    );
}

export default withRouter(connect()(Login));

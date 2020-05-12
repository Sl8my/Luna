import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { LoginFormButton, LoginTitle } from "../styles/buttons";

import {
  LoginTopWrapper,
  MiddleContainer,
  UsernamePasswordWrapper
} from "../styles/containers";

import {FormSignUp, UsernamePasswordForm} from "../styles/form";
import {signupFunction} from "../store/actions/signupAction";

const Registration = props => {
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState(false)
    const history = useHistory();

    const signupHandler = async e => {
        e.preventDefault();

        const data = {
            user: email,
        };

        const res = await props.dispatch(signupFunction(data));

        if (res === 'not ok'){
            return setResponse(true)
        } else {
            history.push('/registration-validation')
        }
    }


    return (
      <>
        <MiddleContainer>
          <LoginTopWrapper>
            <LoginTitle>REGISTRATION</LoginTitle>
          </LoginTopWrapper>
          <UsernamePasswordWrapper>
              <FormSignUp id="login-form" onSubmit={signupHandler}>
            <UsernamePasswordForm onChange = {e => setEmail(e.currentTarget.value)} value={email} type="email" placeholder="E-mail address" required/>
              <p>{(response === true) ? <p style={{fontSize:'18px', padding:'2%',color: 'red',backgroundColor:'rgba(255,0,0,0.2)'}}>Incorrect Email. Please try another email.</p>:''}</p>
            <LoginFormButton form="login-form" type="submit" onClick={signupHandler}>Register</LoginFormButton>
              </FormSignUp>
          </UsernamePasswordWrapper>
        </MiddleContainer>
      </>
    );

}

export default withRouter(connect()(Registration));

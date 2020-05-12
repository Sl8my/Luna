import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory, withRouter} from "react-router-dom";

import {LoginFormButton, LoginTitle, RegistrationButton} from "../styles/buttons";
import {
    LoginTopWrapper,
    MiddleContainer,
    VerificationFormButtomWrapper,
    VerificationFormWrapper,
    VertificationFormWrapperLeft,
    VertificationFormWrapperRight
} from "../styles/containers";

import {FormSignUp, VerificationForm} from "../styles/form";
import {validationFunction} from "../store/actions/validationAction";


const RegistrationValidation = props => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [token , setToken] = useState("")

  const [response, setResponse] = useState(false);
  const history = useHistory();



  const registrationHandler = async e => {
      e.preventDefault();

      const data = {
          token: token,
          user: email,
          username: username,
          password: password,
          location: location,
          token_type: "SIGNUP",
      };

      if (password === passwordRepeat) {
          const res = await props.dispatch(validationFunction(data));
          if (res === 'not ok'){
              return setResponse(true)
          } else {
              history.push('/registration-validation')
          }
      } else {
          return setResponse(true)
      };
  };







    return (
        <>
            <MiddleContainer>
                <LoginTopWrapper>
                    <LoginTitle>VERIFICATION</LoginTitle>
                </LoginTopWrapper>
                <VerificationFormWrapper>
                    {/*<FormSignUp id="validation-form" onSubmit={registrationHandler}>*/}
                    <VertificationFormWrapperLeft>
                        <VerificationForm onChange={e => setEmail(e.currentTarget.value)} value={email} type="email" placeholder="Email address"/>
                        <VerificationForm onChange={e => setUsername(e.currentTarget.value)} value={username} type="text" placeholder="Username"/>
                        <VerificationForm onChange={e => setPassword(e.currentTarget.value)} value={password} type="password" placeholder="Password"/>
                    </VertificationFormWrapperLeft>
                    <VertificationFormWrapperRight>
                        <VerificationForm onChange={e => setToken(e.currentTarget.value)} value={token} type="text" placeholder="Validation code"/>
                        <VerificationForm onChange={e => setLocation(e.currentTarget.value)} value={location} type="text" placeholder="Location"/>
                        <VerificationForm onChange={e => setPasswordRepeat(e.currentTarget.value)} value={passwordRepeat} type="password" placeholder="Password repeat"/>
                            <p>{(response === true) ? <p style={{fontSize:'18px', padding:'2%',color: 'red',backgroundColor:'rgba(255,0,0,0.2)'}}>Password should be the same.</p>:''}</p>
                    </VertificationFormWrapperRight>
                    {/*</FormSignUp>*/}
                </VerificationFormWrapper>
                <VerificationFormButtomWrapper>
                    <RegistrationButton form="validation-form" type="submit" onClick={registrationHandler}>Finish registration</RegistrationButton>
                </VerificationFormButtomWrapper>
            </MiddleContainer>
        </>
    );
}

export default withRouter(connect()(RegistrationValidation));

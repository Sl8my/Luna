import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


import {
  LoginTopWrapper,
  MiddleContainer,
  UsernamePasswordWrapper
} from "../styles/containers";

import { LoginTitle } from "../styles/buttons";
import { ThankYouRegistration } from "../styles/paragraphs";

class RegistrationValidated extends React.Component {

  render() {
    return (
      <>
        <MiddleContainer>
          <LoginTopWrapper>
            <LoginTitle>REGISTRATION</LoginTitle>
          </LoginTopWrapper>
          <UsernamePasswordWrapper>
            <ThankYouRegistration>
              Thank you for your registration!
              <br />
              <br />
              Our hard working monkeys are preparing a digital message called
              E-Mail that will be sent to you soon.<br></br>
              Since monkeys arent good in writing the message could end up in
              you junk folder. Our apologies for any inconvenience.
            </ThankYouRegistration>
          </UsernamePasswordWrapper>
        </MiddleContainer>
      </>
    );
  }
}

export default withRouter(connect()(RegistrationValidated));

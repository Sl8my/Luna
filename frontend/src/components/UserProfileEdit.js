import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {MiddleContainer} from "../styles/containers";

class UserProfileEdit extends React.Component {

    //put some logic here


  render() {
    return (

      <MiddleContainer>

          {/*
          element from UserProfile
          */}

          <h1>EDIT USERPROFILE</h1>



          <button>SAVE</button>
          <button>Delete account</button>






      </MiddleContainer>
    );
  }
}

export default withRouter(connect()(UserProfileEdit));
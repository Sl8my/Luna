import React from "react";
import { useHistory } from "react-router-dom";

import logo from "../../assets/svgs/logo.svg";
import {
  NavBar,
  NavMenuWrapper,
  NavSplit,
  NavSplitRight
} from "../../styles/containers";
import { LoginButton, MenuButtons, SignUpButton } from "../../styles/buttons";

const Nav = () => {
  const history = useHistory();

  return (
    <NavBar>
      <NavSplit>
        <img
          onClick={() => history.push("/")}
          id="logo"
          src={logo}
          style={{ cursor: "pointer" }}
        />
      </NavSplit>
      <NavSplitRight>
        <NavMenuWrapper>
          <MenuButtons onClick={() => history.push("/")}>Home</MenuButtons>
          <MenuButtons onClick={() => history.push("/restaurants")}>
            Search
          </MenuButtons>
          <MenuButtons onClick={() => history.push("/userprofile")}>Profile</MenuButtons>
        </NavMenuWrapper>

        <SignUpButton onClick={() => history.push("/registration")}>
          SIGNUP
        </SignUpButton>
        <LoginButton onClick={() => history.push("/login")}>LOGIN</LoginButton>
      </NavSplitRight>
    </NavBar>
  );
};

export default Nav;

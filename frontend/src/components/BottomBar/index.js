import React from "react";

import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import googleplus from "../../assets/svgs/googleplus.svg";
import instagram from "../../assets/svgs/instagram.svg";

import {
  CopyrightContainer,
  SocialContainer,
  SocialSplit,
  SocialSplitRight
} from "../../styles/containers";
import { MenuButtons, SocialButton } from "../../styles/buttons";

const BottomBar = () => {
  return (
    <>
      <SocialContainer>
        <SocialSplit>
          <MenuButtons>About Us</MenuButtons>
          <MenuButtons>Press</MenuButtons>
          <MenuButtons>Blog</MenuButtons>
          <MenuButtons>iOS</MenuButtons>
          <MenuButtons>Android</MenuButtons>
        </SocialSplit>
        <SocialSplitRight>
          <SocialButton src={facebook} alt="logo" />
          <SocialButton src={twitter} alt="logo" />
          <SocialButton src={googleplus} alt="logo" />
          <SocialButton src={instagram} alt="logo" />
        </SocialSplitRight>
      </SocialContainer>
      <CopyrightContainer>
        <p>©️ Copyright Luna 2020</p>
      </CopyrightContainer>
    </>
  );
};

export default BottomBar;

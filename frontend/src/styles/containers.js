import styled from "styled-components";

import foodBackground from "../assets/images/joseandres-fish-reemadesai-63.jpg"

//MAIN

export const BaseContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

//MIDDLE MAIN
export const MiddleContainer = styled(BaseContainer)`
  width: 100%;
  height: 86%;
  background-color: #f8f8f8;
`;

//BOTTOM BAR

export const SocialContainer = styled(BaseContainer)`
  width: 100%;
  height: 5%;
  border-bottom: solid 1px #ebebeb;
  display: flex;
`;

export const SocialSplit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-left: 2%;
`;

export const SocialSplitRight = styled(SocialSplit)`
  justify-content: flex-end;
  align-items: center;
  margin-left: 2%;
  margin-right: 2%;
`;

export const CopyrightContainer = styled(BaseContainer)`
  width: 100%;
  height: 2%;
  display: flex;
  align-items: center;
  margin-left: 2%;
  p {
    font-size: 12px;
    color: #646363;
  }
`;

// NAV BAR

export const NavBar = styled(BaseContainer)`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
`;

export const NavSplit = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-left: 2%;
`;

export const NavSplitRight = styled(NavSplit)`
  justify-content: flex-end;
  margin-left: 0%;
  margin-right: 2%;
`;

export const NavMenuWrapper = styled(NavSplitRight)`
    display: flex;
    justify-content: space-between;
    height: 100%
    width: 50%;
    margin-right: 10%;
`;

// Homepage

//MIDDLE MAIN
export const SearchBarWrapper = styled(MiddleContainer)`
  width: 100%;
  height: 35%;
  
  background-image: url(${foodBackground});
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  justify-content:center;
  align-items:center;
  
  input[type="text"],input[type="password"]{
    border: none;
    outline: none;
`;

export const BestRatedWrapper = styled(MiddleContainer)`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size:24px;
`;

export const TopFourRestWrapper = styled(MiddleContainer)`
  width: 100%;
  height: 53%;
  display: flex;
  justify-content: center;
  align-items:flex-start;
`;

//Login Page

export const LoginTopWrapper = styled(MiddleContainer)`
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size:24px;
`;

export const UsernamePasswordWrapper = styled(MiddleContainer)`
  width: 100%;
  height: 67%;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  flex-direction: column;
  font-size:24px;
`;

//Registration Validation


export const VerificationFormWrapper = styled(UsernamePasswordWrapper)`
width: 100%;
height: 34%;
flex-direction:row;
justify-content: center;
  align-items:flex-start;
`;

export const VertificationFormWrapperLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 70%;
    margin-right: 1%;
`;

export const VertificationFormWrapperRight= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 70%;
    margin-left:1%;
   
`;

export const VerificationFormButtomWrapper = styled(UsernamePasswordWrapper)`
    width: 100%;
    height: 33%;
    flex-direction:row;
    justify-content: center;
    align-items:flex-start;
`;


// Create new restaurant

export const CreateNewRestaurantWrapper = styled(MiddleContainer)`
  height: 17%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const CreateNewRestaurantTitle = styled(MiddleContainer)`
  height: 16%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;





import styled from "styled-components";

import foodBackground from "../assets/images/joseandres-fish-reemadesai-63.jpg";
import {MiddleContainer} from "./containers";

export const UserProfileWrapper = styled.div`
      width: 100%;
      height: 25%;
      background-color: rgba(0,0,0,0.5);
      background-image: url(${foodBackground});
      background-size: cover;
      background-repeat: no-repeat;
      `;

export const UserProfileMainWrapper = styled.div`
      background-color: #f8f8f8;
      display: flex;
      column-count: 3;
      height: 75%;
      `;

export const LeftUserProfile = styled.div`
      width: 30%;
      `;

export const LeftUserProfileWrapperBox = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-left;
      text-align: center;
      width: 52.5%;
      background-color: #ffffff;
      `;
export const ButtonUserProfilePicture =styled.button`
      border: 0;
      background-color: #ffffff;
      float: left;
      `;

export const Head2 = styled.h2`
      margin-bottom:10px;
      `;

export const ButtonUserProfile = styled.button`
      background-color: #ffffff;
      border-right: none;
      border-left:none;
      border-top: 0.1px #979797;
      margin-bottom:5px;
      :hover{
      background-color: #f8f8f8;
      border-left: solid 3px #e47d31;
      }
      `;

export const UserButtonUserProfile =styled.button`
      background-color: #ffffff;
      `;

export const MiddleUserProfile = styled.div`
      width: 45%;
      display: flex;
      flex-direction: column;
      background-color: #ffffff;
      text-align: left;
      `;

export const RightUserProfile = styled.div`
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      justify-content: space-evenly; 
      `;

export const RightWrapper = styled.div`
      margin-left: 20px;
      `;

export const ParaWrapper = styled.p`
      font-size: medium;
      text-decoration: none;
      margin-left: 20px;
      `;
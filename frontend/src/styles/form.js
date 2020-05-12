import styled from "styled-components";

export const BaseForm = styled.input`
  height: 15%;
  width:35%;
  horizontal-align: left;
  text-align:left;
  padding-left: 1%;
  
  ::placeholder{
    color: #4c4c4c;
  }
  :focus {
    outline:none;
    }
  

`;


export const UsernamePasswordForm = styled(BaseForm)`
  height: 10%;
  width:30%;
  horizontal-align: left;
  text-align:left;
  padding-left: 1%;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;
  border: solid 1px #ebebeb;
  ::placeholder {
    color: #979797;
  }
  
`;


export const VerificationForm = styled(UsernamePasswordForm)`
    width: 100%;
    height: 40%;
    margin-top: 2%;
    margin-bottom: 2%;
`;


export const NewRestaurantForm = styled(UsernamePasswordForm)`
  height: 50%;
  width:100%;
  horizontal-align: left;
  text-align:left;
  padding-left: 1%;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;
  border: solid 1px #ebebeb;
  font-family: Karla;
  :placeholder {
    color: #979797;
  }
`;

export const FormSignUp = styled.form`
    height: 100%;
    width: 100%;
`
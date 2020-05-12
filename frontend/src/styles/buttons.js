import styled from "styled-components";

//NAV BAR
export const MenuButtons = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #4a4a4a;
  :hover {
    border-bottom: solid 3px ${props => props.theme.mainColor};
    font-weight: bold;
    color: #4a4a4a;
  }
`;

export const BestRatedRestaurantTitle = styled(MenuButtons)`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: unset;
  color: #4a4a4a;
  border-bottom: solid 3px ${props => props.theme.mainColor};
  font-weight: bold;
`;

export const MainOrangeButton = styled.button`
  background-color: ${props => props.theme.mainColor};
  cursor: pointer;
  font-size: 16px;
  border: solid 1px ${props => props.theme.fourthColor};
  height: 65%;
  width: 12%;
  color: ${props => props.theme.fourthColor};
`;

export const SignUpButton = styled(MainOrangeButton)`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const LoginButton = styled(MainOrangeButton)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const SocialButton = styled.img`
    height:100%
    width:50%;
    margin-right:5%;
    cursor: pointer;
`;

export const SubmitButton = styled(MainOrangeButton)`
    height: 15%;
    width: 9%;
    border: none;
    border-radius 20px;
    font-size: 20px;
    margin-left: 3%;
`;

export const LoginFormButton = styled(MainOrangeButton)`
    height: 10%;
    width: 11%;
    border: none;
    border-radius 30px;
    font-size: 20px;
    margin-top: 5%;
`;

export const ImageButton = styled(LoginFormButton)`
    height: 40%;
    width: 41%;
    border: none;
    border-radius 30px;
    font-size: 16px;
    margin-top: 5%;
`;

export const LoginTitle = styled(MenuButtons)`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: unset;
  color: #4a4a4a;
  border-bottom: solid 3px ${props => props.theme.mainColor};
  font-weight: bold;
`;

//Vertification Registration Button

export const RegistrationButton = styled(MainOrangeButton)`
    height: 18%;
    width: 14%;
    border: none;
    border-radius 30px;
    font-size: 20px;
    margin-top: 0%;
`;


export const DonutSpinner = styled.div`
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${props => props.theme.mainColor};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: donut-spin 1.2s linear infinite;

`

export const RestaurantOrangeButton = styled.button`
  background-color: ${props => props.theme.mainColor};
  cursor: pointer;
  font-size: 16px;
  border: solid 1px ${props => props.theme.fourthColor};
  height: 35%;
  width: 35%;
  padding: 10px;
  border-radius: 20px;
  color: ${props => props.theme.fourthColor};
`;




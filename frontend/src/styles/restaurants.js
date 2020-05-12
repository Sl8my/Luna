import styled from "styled-components";
import arrow from "../assets/svgs/arrow.svg";
import {MiddleContainer, TopFourRestWrapper} from "./containers";
import {MenuButtons} from "./buttons";


//MAIN

export const SearchRestaurantsWrapper = styled.div`
  width: 100%;
  height: 6%;
  display:flex;
  justify-content:center;
  align-items:center;
  
`;

export const RestaurantSearchFormLeft = styled.input`
  height: 100%;
  width: 100%;
  horizontal-align: left;
  text-align:left;
  padding-left: 2%;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;
  border: solid 1px #ebebeb;
  ::placeholder {
    color: #d8d8d8;
  }
  :focus {
    outline:none;
    }
`;

export const RestaurantSearchFormRight = styled.select`
  height: 100%;
  width:20%;
  padding-left:1%;
  border: solid 1px #ebebeb;
  background-color: white;
  color: #d8d8d8;
  background: url(${arrow}) ;
  background-position: 95% 50%;
  background-repeat: no-repeat;
  -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
    :focus {
    outline:none;
    }
`;

export const SearchWrapper = styled(MiddleContainer)`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items:flex-start;
  font-size:24px;
`;

export const SearchWrapperSub = styled.div`
    display: flex;
    width: 15%;
    height: 60%;
  justify-content:center;
  align-items: flex-end;
  border-bottom: solid 1px #d8d8d8;
  cursor: pointer;
  :hover {
  border-bottom: solid 3px ${props => props.theme.mainColor};
  }
`

export const SearchWrapperChosen = styled(SearchWrapperSub)`
    display: flex;
    width: 15%;
    height: 60%;
  justify-content:center;
  align-items: flex-end;
  border-bottom: solid 1px #d8d8d8;
  cursor: pointer;
  border-bottom: solid 3px ${props => props.theme.mainColor};
  
`

export const SearchTitles = styled(MenuButtons)`
    height: 100%;
  display: flex;
  justify-content:center;
  align-items:  center;
  cursor: unset;
  color: #4a4a4a;
    border-bottom: none;
    font-weight: bold;
    margin-left: 5%;
    margin-right: 5%;
    :hover {
  border-bottom: none;
  }
`

export const RenderRestaurantsWrapper = styled(TopFourRestWrapper)`
  width: 100%;
  height: 82%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto:
  flex-wrap: wrap;
    overflow-y:scroll; 
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
`;

export const RenderRestaurantsWrapperSub = styled(TopFourRestWrapper)`
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
    overflow-y:none; 
}
`;



export const RestaurantCardSearch = styled.div`
    height: 50%;
    width: 13%;
    border-top: 5px solid ${props => props.theme.mainColor};  
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-left:1%;
    margin-right:1%;
    margin-bottom:2%;
    display: flex;
    flex-direction: column;
    flex: 0 1 21%;
    
`


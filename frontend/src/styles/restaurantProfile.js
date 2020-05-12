import styled from "styled-components";
import {TopFourRestWrapper} from "./containers";
import {UserNameContainer} from "./cardDesign";


export const RenderRestaurantsWrapper = styled(TopFourRestWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto:
  flex-wrap: wrap;
  background-color: yellow;
    overflow-y:scroll; 
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
`;

export const RenderRestaurantsWrapperSub = styled(TopFourRestWrapper)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
    overflow-y:none; 
    
`;

export const RestaurantProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const RestaurantHeader = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.img});
  background-size: cover;
  
  
`;

export const RestaurantContent = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  background-color: #f8f8f8;

`;


export const RestaurantNameContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;    
  background-color: rgba(0,0,0,0.1);
  border: none;
  
`;

export const RestaurantName = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
    align-items: center;
    margin-left: 20%
    margin-top: 10%;
  justify-content: space-evenly;
  
`;

export const RestaurantTitle = styled.div`
  color: white;
  font-size: 36px;
  font-weight: bold;
`;


export const RestaurantCategory = styled.div`
  color: white;
  font-size: 20px;
`;


export const RestaurantReviews = styled.div`
  color: white;
  font-size: 16px;
`;


export const StarsRatingContainer = styled.div`
    border: none;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:row;
    height: 11%;
    width 100%;
`;


export const RestaurantMap = styled.div`
    display: flex;
    align-items: center;
    height: 40%;
    z-index: 2;
    flex-direction: column;
    padding: 0;
    margin: 0;
    top: 10%;
    left: 60%;
    right: 0;  
    bottom: 0; 
    position: absolute;
    z-index: 100;
    border-radius: 8px;
}  `
;

export const RestaurantMapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
   }
  
  `
;

export const RestaurantMapImage = styled.div`
  width: 100%;
  height: 50%;
      img{
    max-width: 150%;
    max-height: 140%;  
    }
 `;

export const RestaurantMapText = styled.div`
  width: 46%;
  height: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    p {
      margin: 0;
      padding: 2px;
      font-size: 20px;
      line-height: 1;
    }
  
`;


export const RestaurantReviewsContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 2%;
`;


export const RestaurantEditContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 2%;
`;


export const RestaurantEditText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 30%;
  line-height: 3;
      img{
    padding-right: 20px;
    
    }

`;

export const RestaurantEditButtons = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: space-around;
`;



export const ReviewCardSearch = styled.div`
    height: 60%;
    width: 100%;
    border-top: 5px solid ${props => props.theme.mainColor};  
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-left:1%;
    margin-right:1%;
    margin-bottom:2%;
    display: flex;
    flex-direction: column;

    
`;

export const ReviewNameContainer = styled.div`    
    border: none;
    margin-left: 0;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 24.5%;
    width 100%;
    background-color: #ffffff;
`;





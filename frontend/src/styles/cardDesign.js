// Design for Restaurant, Review and User Cards
import styled from "styled-components";
import {BestRatedRestaurantTitle, LoginButton, MainOrangeButton, MenuButtons, SignUpButton} from "./buttons";

//Restaurant Cards
export const RestaurantCard = styled.div`
    height: 85%;
    width: 13%;
    border-top: 5px solid ${props => props.theme.mainColor};  
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-left:1%;
    margin-right:1%;
    display: flex;
    flex-direction: column;
`

export const RestaurantNameContainer = styled(RestaurantCard)`
border-top: none;
    border-left: none;
    
    margin-right: 0;
    border-bottom: none;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    height: 22%;
    width 100%;
    background-color: #ffffff;
    
`

export const StarsRatingContainer = styled(RestaurantCard)`
    border-top: none;
    
    border-right: none;
    border-left: none;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction:row;
    height: 11%;
    width 100%;
`

export const BottomPhotoContainer = styled.div`
    
    height: 67%;
    width 100%;
    border-top: none;
    display:flex;
    img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    }
`

export const RestaurantTitle = styled(BestRatedRestaurantTitle)`
    border-bottom: none;
    font-weight: normal;
    font-size:20px;
    margin-left: 1%;
    
  cursor: unset;
  
  :hover {
    border-bottom: unset;
    font-weight: unset;
  }
`

export const AddressTitle = styled(RestaurantTitle)`
    font-size:18px;
`

export const RatingTitle = styled(RestaurantTitle)`
    margin-right: 5%;
`

export const StarRating = styled.img`

  width: 27px;
  height: 24.4px;
`

//Users Cards

export const UserCardSearch = styled.div`
    height: 35%;
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

export const ImageWrapper = styled.div`
    height: 100%;
    width: 60%;
    display:flex;
    
    img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-left: 0;
    margin-top:0;
    }
`

export const UserNameContainer = styled(RestaurantNameContainer)`
    
    border: none;
    margin-left: 0;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 35%;
    width 100%;
    background-color: #ffffff;
    
`

export const UserNameReviewWrapper = styled(RestaurantNameContainer)`
height:100%;
width: 100%;
border: none;
    margin-left: 0%;
    margin-right: 0;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #ffffff;
    
`

export const UserProfileSnippetWrapper = styled(StarsRatingContainer)`
    border-top: solid 1px #ebebeb;
    border-bottom: none;
    border-right: none;
    border-left: none;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:row;
    height: 65%;
    width 100%;
    margin:0;
`

export const UserTitle = styled(BestRatedRestaurantTitle)`
    border-bottom: none;
    font-weight: bold;
    font-size:20px;
    margin-left: 1%;
    color: ${props => props.theme.mainColor};  
    
  cursor: unset;
  
  :hover {
    border-bottom: unset;
    font-weight: bold;
    
    color: ${props => props.theme.mainColor};
  }
`

export const ReviewsTitle = styled(UserTitle)`
    font-size:14px;
    color: ${props => props.theme.secondaryColor}; 
    
    :hover{color: ${props => props.theme.secondaryColor};  }
`

export const UserParagraph = styled.p`
width: 90%;
height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.secondaryColor};
    max-height:100%;
    
  text-align: left;
    
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;           
    -o-text-overflow: ellipsis;    
`

export const ReadMoreLink = styled.a`
     font-size:14px;
     font-weight: bold;
     color: #e47d31;
     text-decoration: none;
     cursor: pointer;
     :hover, :focus{
        color: ${props => props.theme.mainColor};
     }
     
`

// Reviews cards

export const ReviewCardSearch = styled.div`
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

export const ReviewNameContainer = styled(UserNameContainer)`
    
    border: none;
    margin-left: 0;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    height: 24.5%;
    width 100%;
    background-color: #ffffff;
`
export const ReviewImageWrapper = styled.div`
    height: 100%;
    width: 60%;
    display:flex;
    
    img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-left: 0;
    margin-top:0;
    }
`

export const ReviewSnippetWrapper = styled(StarsRatingContainer)`
    border-top: none;
    border-bottom: none;
    border-right: none;
    border-left: none;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:row;
    height: 25%;
    width 100%;
    margin:0;
`

export const CommentRestaurantWrapper = styled(ReviewSnippetWrapper)`
    height: 10%;
    justify-content: flex-start;
    margin-left: 4%;
    border-top: none;
   
    border-bottom: none;
`

export const ReviewParagraph = styled.p`
width: 90%;
height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.secondaryColor};
    max-height:100%;
    
  text-align: left;
    
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;           
    -o-text-overflow: ellipsis;    
`

export const LikeCommentWrapper = styled.div`
    width: 100%;
    height: 15%;
    margin-top:1%;
    display: flex;
    justify-content: center;
    align-items:center;
`

export const LikeButton = styled(SignUpButton)`
    background-color:rgba(145, 145, 145, 0.6);
    font-size: 14px;
    width: 50%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const CommentButton = styled(LoginButton)`
    background-color:rgba(145, 145, 145, 0.6);
    font-size: 14px;
   width: 50%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;


export const LatestCommentWrapper = styled(CommentRestaurantWrapper)`
    height: 35.5%%;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2%;
    border-top: none;   
    border-bottom: none;
`

export const LatestCommentBottomTitle = styled(BestRatedRestaurantTitle)`
    border-bottom: none;
    font-weight: 300;
    font-size: 18px;
    margin-left: 1%;
    color: ${props => props.theme.secondaryColor};;
    :hover{
    border: none;
    font-weight: normal;
    color: ${props => props.theme.secondaryColor};
    } 

`

export const UserBottom = styled(LatestCommentBottomTitle)`
    border-bottom: none;
    font-weight: 300;
    font-size: 14px;
    margin-left: 1%;
    margin-top: 5%;
    color: ${props => props.theme.mainColor};
    :hover{
    border: none;
    
    font-weight: normal;
    color: ${props => props.theme.mainColor};
    } 

`

export const CommentUserBottom = styled(UserBottom)`
    border-bottom: none;
    font-weight: 300;
    font-size: 14px;
    margin-left: 1%;
    margin-top: 1%;
    color: ${props => props.theme.secondaryColor};

    :hover{
    border: none;
    
    font-weight: normal;
    color: ${props => props.theme.secondaryColor};
    } 

`
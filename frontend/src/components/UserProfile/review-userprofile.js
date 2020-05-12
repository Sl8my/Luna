import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//styles
import {BaseContainer, BestRatedWrapper, MiddleContainer, SearchBarWrapper} from "../../styles/containers";
import {
    UserProfileWrapper,
    UserProfileMainWrapper,
    LeftUserProfile, ButtonUserProfilePicture,
    LeftUserProfileWrapperBox, UserButtonUserProfile, Head2,
    MiddleUserProfile, RightUserProfile, Item1, Item2, ButtonUserProfile, RightWrapper, ParaWrapper
} from "../../styles/userProfileContainer";
import laurent from "../../assets/images/laurent.jpeg";

//files
import {EditUserProfile} from "./edit-userprofile";

import {CommentUserProfile} from "./comment-userprofile";
import {RestaurantUserProfile} from "./restaurant-userprofile";
//svg images
import star from "../../assets/svgs/star.svg";
import comment from "../../assets/svgs/comment.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import edit from "../../assets/svgs/edit.svg";


class ReviewUserProfile extends React.Component {
    state = {
        button: true
    }
    onClickEditProfile = () =>{
         this.props.history.push('/edit-userprofile/');
    }
    onClickReviews = () =>{
         this.props.history.push('/review-userprofile/');
    }
    onClickComments = () =>{
         this.props.history.push('/comment-userprofile/');
    }
    onClickRestaurants = () =>{
         this.props.history.push('/restaurant-userprofile/');
    }


    render() {
        return (
            <MiddleContainer>

                <UserProfileWrapper>
                    <ButtonUserProfilePicture style={{marginLeft:240}}><img src="http://taurus-luna.propulsion-learn.ch/media-files/profile_picture/blossom.png" height={152} width={177} marginLeft={100}/></ButtonUserProfilePicture>
                </UserProfileWrapper>

                <UserProfileMainWrapper>

                    <LeftUserProfile>
                        <LeftUserProfileWrapperBox style={{marginLeft:240, height:152, width:177}}>
                                    <ButtonUserProfile><Head2>Tracey's profile</Head2></ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}} onClick={this.onClickReviews}><img id="star" src={star} />Reviews</ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}} onClick={this.onClickComments}><img id="comment" src={comment} />Comments</ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}} onClick={this.onClickRestaurants}><img id="restaurant" src={restaurant} />Restaurant</ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}}  onClick={this.onClickEditProfile}><img id="edit" src={edit} />Edit Profile</ButtonUserProfile>
                        </LeftUserProfileWrapperBox>
                    </LeftUserProfile>

                    <MiddleUserProfile>

                    </MiddleUserProfile>

                    <RightUserProfile>
                                <RightWrapper><h2>ABOUT TRACEY</h2></RightWrapper>
                                <RightWrapper><h3>Location</h3></RightWrapper>
                                <ParaWrapper>Switzerland</ParaWrapper>
                                <RightWrapper><h3>Luna member since</h3></RightWrapper>
                                <ParaWrapper>no data</ParaWrapper>
                                <RightWrapper><h3>Things I love</h3></RightWrapper>
                                <ParaWrapper>I Love Food</ParaWrapper>
                                <RightWrapper><h3>Description</h3></RightWrapper>
                                <ParaWrapper>Chicken</ParaWrapper>
                    </RightUserProfile>

                </UserProfileMainWrapper>
            </MiddleContainer>
        )
    }
}
export default withRouter(connect()(ReviewUserProfile));

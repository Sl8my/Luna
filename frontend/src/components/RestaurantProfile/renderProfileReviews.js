import {
    CommentButton, CommentRestaurantWrapper, CommentUserBottom, LatestCommentBottomTitle, LatestCommentWrapper,
    LikeButton, LikeCommentWrapper,
    ReadMoreLink, ReviewImageWrapper, ReviewParagraph, ReviewSnippetWrapper,
    ReviewsTitle, UserBottom,
    UserNameReviewWrapper,
    UserTitle
} from "../../styles/cardDesign";

import {ReviewCardSearch, ReviewNameContainer} from '../../styles/restaurantProfile'
import React from "react";
import {
    RenderRestaurantsWrapper,
    RenderRestaurantsWrapperSub,

    } from "../../styles/restaurants";

import laurent from "../../assets/images/laurent.jpeg"
import thumb from "../../assets/svgs/finger.svg"

// To link with Backend to render

const ProfileReviewsRender = (reviews) => {
    const renderReviews= (reviews) => {
            return (
                <ReviewCardSearch>
                    <ReviewNameContainer>
                        <ReviewImageWrapper>
                            <img src={reviews.reviews.user.profile_picture}/>
                        </ReviewImageWrapper>
                        <UserNameReviewWrapper>
                            <UserTitle>{reviews.reviews.user.firstname} {reviews.reviews.user.last_name}</UserTitle>
                            <ReviewsTitle>6 reviews in total</ReviewsTitle>
                        </UserNameReviewWrapper>
                    </ReviewNameContainer>
                    <CommentRestaurantWrapper>
                        <UserTitle>Colinz Bar</UserTitle>
                    </CommentRestaurantWrapper>
                    <ReviewSnippetWrapper>
                        <ReviewParagraph>{reviews.reviews.text_content} <ReadMoreLink src='#'>read more</ReadMoreLink> </ReviewParagraph>
                    </ReviewSnippetWrapper>
                    <LikeCommentWrapper>
                        <LikeButton><img style={{maxHeight: '40%', maxWidth:'25%'}} src={thumb} alt="thumb for like"/>Like</LikeButton>
                        <CommentButton>Comment 23</CommentButton>
                    </LikeCommentWrapper>
                    <LatestCommentWrapper>
                        <LatestCommentBottomTitle>Latest Comment</LatestCommentBottomTitle>
                        <UserBottom>Colin Wirz</UserBottom>
                        <CommentUserBottom>Actually you have no taste!</CommentUserBottom>
                    </LatestCommentWrapper>
                </ReviewCardSearch>
            );


    };

    return (
        <RenderRestaurantsWrapper>
            <RenderRestaurantsWrapperSub>
                {renderReviews(reviews)}
            </RenderRestaurantsWrapperSub>
        </RenderRestaurantsWrapper>
    );
};

export default ProfileReviewsRender;

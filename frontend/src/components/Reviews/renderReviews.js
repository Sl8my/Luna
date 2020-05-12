import {
    CommentButton, CommentRestaurantWrapper, CommentUserBottom, LatestCommentBottomTitle, LatestCommentWrapper,
    LikeButton, LikeCommentWrapper,
    ReadMoreLink, ReviewCardSearch, ReviewImageWrapper, ReviewNameContainer, ReviewParagraph, ReviewSnippetWrapper,
    ReviewsTitle, UserBottom, UserCommentBottom,
    UserNameReviewWrapper,
    UserTitle
} from "../../styles/cardDesign";
import React from "react";
import {
    RenderRestaurantsWrapper,
    RenderRestaurantsWrapperSub,
    } from "../../styles/restaurants";

import laurent from "../../assets/images/laurent.jpeg"
import thumb from "../../assets/svgs/finger.svg"
import {useFetch} from "../../hooks/useFetch";

// To link with Backend to render

const UsersRender = () => {
    const ids = [1,3,4,5,6]

    const URL = "https://taurus-luna.propulsion-learn.ch/backend/api/restaurants/";

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const config = {
        method: "GET",
        headers
    };

    const [response, error] = useFetch(URL, config);


    const dummyObj = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Ab accusantium, aperiam atque, blanditiis corporis, culpa delectus deleniti dolorum excepturi harum hic illo impedit inventore ipsam maiores minus molestiae numquam odio omnis optio provident ratione rem sed sit soluta veniam voluptates! Architecto blanditiis consequatur consequuntur eos esse expedita ipsum laborum optio, perferendis quia, quis, quos tempora ut? Dignissimos distinctio dolorum eligendi iure maxime, ut. Blanditiis, dolorem explicabo id iure labore nam perferendis porro quod, saepe soluta, temporibus unde vitae. Iusto natus nisi quia? Nam quaerat saepe ullam vel. Architecto dolorem earum neque nostrum repellendus, similique suscipit ut! A in sapiente soluta? '

    const truncate = (input) => input.length > 100 ? `${input.substring(0, 100)}...` : input;

    const truncatedDummyObj = truncate(dummyObj);
    const dummyImages = [1,2,3,4,5,6,7,8,9,10,11,12];

    //UPDATE WITH USERS API

    const renderReviews= () => {
        return dummyImages.map(users => {
            return (
                <ReviewCardSearch>
                    <ReviewNameContainer>
                        <ReviewImageWrapper>
                            <img src={laurent}/>
                        </ReviewImageWrapper>
                        <UserNameReviewWrapper>
                            <UserTitle>Laurent H.</UserTitle>
                            <ReviewsTitle>6 reviews in total</ReviewsTitle>
                        </UserNameReviewWrapper>
                    </ReviewNameContainer>

                    <CommentRestaurantWrapper>

                        <UserTitle>Colinz Bar</UserTitle>

                    </CommentRestaurantWrapper>


                    <ReviewSnippetWrapper>
                        <ReviewParagraph>{truncatedDummyObj} <ReadMoreLink src='#'>read more</ReadMoreLink> </ReviewParagraph>


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
        })


    };

    return (
        <RenderRestaurantsWrapper>
            <RenderRestaurantsWrapperSub>
                {renderReviews()}
            </RenderRestaurantsWrapperSub>
        </RenderRestaurantsWrapper>
    );
};

export default UsersRender;

import {
    AddressTitle,
    BottomPhotoContainer,
    ImageWrapper,
    RatingTitle, ReadMoreLink,
    RestaurantNameContainer,
    RestaurantTitle,
    ReviewsTitle,
    StarsRatingContainer,
    UserCardSearch,
    UserNameContainer,
    UserNameReviewWrapper,
    UserParagraph,
    UserProfileSnippetWrapper,
    UserTitle
} from "../../styles/cardDesign";
import React from "react";
import {
    RenderRestaurantsWrapper,
    RenderRestaurantsWrapperSub,
    RestaurantCardSearch
} from "../../styles/restaurants";

import laurent from "../../assets/images/laurent.jpeg"
import {useFetch} from "../../hooks/useFetch";
import {DonutSpinner} from "../../styles/buttons";

// To link with Backend to render

const UsersRender = () => {
    //To change with endpoint
    const dummyObj = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Ab accusantium, aperiam atque, blanditiis corporis, culpa delectus deleniti dolorum excepturi harum hic illo impedit inventore ipsam maiores minus molestiae numquam odio omnis optio provident ratione rem sed sit soluta veniam voluptates! Architecto blanditiis consequatur consequuntur eos esse expedita ipsum laborum optio, perferendis quia, quis, quos tempora ut? Dignissimos distinctio dolorum eligendi iure maxime, ut. Blanditiis, dolorem explicabo id iure labore nam perferendis porro quod, saepe soluta, temporibus unde vitae. Iusto natus nisi quia? Nam quaerat saepe ullam vel. Architecto dolorem earum neque nostrum repellendus, similique suscipit ut! A in sapiente soluta? '

    const truncate = (input) => input.length > 150 ? `${input.substring(0, 150)}...` : input;

    const truncatedDummyObj = truncate(dummyObj);
    const dummyImages = [1,2,3,4,5,6,7,8,9,10,11,12];

    const URL = "https://taurus-luna.propulsion-learn.ch/backend/api/users/list/";

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const config = {
        method: "GET",
        headers
    };

    const [response, error] = useFetch(URL, config);

    const renderUsers = () => {

        if(response){
        return response.map(users => {
            return (
                <UserCardSearch>
                    <UserNameContainer>
                        <ImageWrapper>
                            <img src={users.profile_picture}/>
                        </ImageWrapper>
                        <UserNameReviewWrapper>
                            <UserTitle>{`${users.first_name} ${users.last_name}.`}</UserTitle>
                            <ReviewsTitle>{`${users.id} reviews in total`}</ReviewsTitle>
                        </UserNameReviewWrapper>
                    </UserNameContainer>
                    <UserProfileSnippetWrapper>
                        <UserParagraph>{truncate(users.description)} <ReadMoreLink src='#'>read more</ReadMoreLink> </UserParagraph>


                    </UserProfileSnippetWrapper>
                </UserCardSearch>
            );
        })

        } else {
            return(
                <DonutSpinner></DonutSpinner>
            )
        }
        }

    return (
        <RenderRestaurantsWrapper>
            <RenderRestaurantsWrapperSub>
                {renderUsers()}
            </RenderRestaurantsWrapperSub>
        </RenderRestaurantsWrapper>
    );
};

export default UsersRender;

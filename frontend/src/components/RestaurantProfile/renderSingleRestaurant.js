import React, {useEffect, useState} from "react";
import {
    RenderRestaurantsWrapper,
    RenderRestaurantsWrapperSub,
    RestaurantProfileWrapper,
    RestaurantHeader,
    RestaurantNameContainer,
    RestaurantContent,
    RestaurantName,
    RestaurantMap,
    RestaurantCategory,
    RestaurantTitle,
    RestaurantReviews,
    StarsRatingContainer,
    RestaurantMapImage,
    RestaurantMapText,
    RestaurantEditContainer,
    RestaurantReviewsContainer,
    RestaurantEditText,
    RestaurantEditButtons, RestaurantMapContainer,

} from "../../styles/restaurantProfile";
import { RestaurantOrangeButton } from "../../styles/buttons"
import { renderStars } from "../Homepage/TopFour/starRenderFunction";
import getRestaurantProfileFunction from "../../store/actions/getRestaurantProfileAction";
import getRestaurantReviewsFunction from "../../store/actions/getRestaurantReviews";
import ReviewsRender from "../Reviews/renderReviews";
import ProfileReviewsRender from "./renderProfileReviews";


const SingleRestaurantRender = (props) => {

    const renderSingleRestaurant = (props) => {
        let reviews = [];
        let num_reviews = 2;
        if (props.props.RestaurantReducer.restaurant.id === undefined) {
            return (
                <div></div>
            )
        } else {
            const restaurant = props.props.RestaurantReducer.restaurant;
            let price_level = "";

            if (props.props.RestaurantReducer.reviews) {
                reviews = props.props.RestaurantReducer.reviews;
            }

            switch(props.props.RestaurantReducer.restaurant.price_level) {
                case "LOW":
                    price_level = "$";
                    break;
                case "MEDIUM":
                    price_level = "$$";
                    break;
                case "HIGH":
                    price_level = "$$$";
                    break;
            }

            return (
                <RestaurantProfileWrapper>
                    <RestaurantHeader img={restaurant.image} >
                        <RestaurantNameContainer>
                            <RestaurantName>
                                <RestaurantTitle>{restaurant.name}</RestaurantTitle>
                                <RestaurantCategory>{restaurant.category.name}</RestaurantCategory>
                                <div>
                                <RestaurantReviews>{renderStars(500)} {num_reviews} Reviews</RestaurantReviews>
                                 </div>
                            </RestaurantName>
                        </RestaurantNameContainer>
                        <RestaurantMap>
                            <RestaurantMapContainer>
                                <RestaurantMapImage>
                                    <img src="https://joomly.net/frontend/web/images/googlemap/map.png" alt="map"/>
                                </RestaurantMapImage>
                                <RestaurantMapText>
                                    <p>{restaurant.street} {restaurant.city} {restaurant.country}</p>
                                    <p>{restaurant.phone}</p>
                                    <p>{restaurant.email}</p>
                                </RestaurantMapText>
                            </RestaurantMapContainer>
                        </RestaurantMap>
                    </RestaurantHeader>
                    <RestaurantContent>
                        <RestaurantReviewsContainer>
                            <ProfileReviewsRender reviews={reviews} />
                        </RestaurantReviewsContainer>
                        <RestaurantEditContainer>
                            <RestaurantEditText>
                                <p>
                                    <img src={require("../../assets/svgs/clock.svg")} alt="clock"/>
                                    {restaurant.opening_hours}
                                </p>
                                <p>
                                    <img src={require("../../assets/svgs/money.svg")} alt="clock"/>
                                   Price Level: {price_level}
                                </p>
                            </RestaurantEditText>
                            <RestaurantEditButtons>
                                <RestaurantOrangeButton>WRITE A REVIEW</RestaurantOrangeButton>
                                <RestaurantOrangeButton>EDIT DATA</RestaurantOrangeButton>
                            </RestaurantEditButtons>
                        </RestaurantEditContainer>
                    </RestaurantContent>
                </RestaurantProfileWrapper>
            );
        }
        ;
    }

  return (
      <>
      {renderSingleRestaurant(props)}
      </>
        );
};

export default SingleRestaurantRender;

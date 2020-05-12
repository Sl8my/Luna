import {
  AddressTitle,
  BottomPhotoContainer,
  RatingTitle,
  RestaurantCard,
  RestaurantNameContainer,
  RestaurantTitle,
  StarRating,
  StarsRatingContainer
} from "../../../styles/cardDesign";
import star from "../../../assets/svgs/star-yellow.svg";
import starHalf from "../../../assets/svgs/rating.svg";
import starGrey from "../../../assets/svgs/star-grey.svg";
import { TopFourRestWrapper } from "../../../styles/containers";
import React, {useEffect} from "react";
import { renderStars } from "./starRenderFunction";
import {useFetch} from "../../../hooks/useFetch";
import {DonutSpinner} from "../../../styles/buttons";
import {Link} from "react-router-dom";
import getRestaurantProfileFunction from "../../../store/actions/getRestaurantProfileAction";
import getRestaurantReviewsFunction from "../../../store/actions/getRestaurantReviews";
import setRestaurantFunction from "../../../store/actions/setRestaurantAction";

// To link with Backend to render

const TopFour = (props) => {

    const URL = "https://taurus-luna.propulsion-learn.ch/backend/api/home/";

    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const config = {
        method: "GET",
        headers
    };

   const [response, error] = useFetch(URL, config);

   const renderTopFourRestaurants = (props) => {

      const restaurantProfileHandler = (props,restaurant_id) => {
            props.props.dispatch(setRestaurantFunction(restaurant_id));
      }

      if(response) {
          return response.map(res => {
              const randomNum = Math.floor(Math.random() *  (100 - 70 + 1) + 70) ;
              const  restaurant_id = res.id;
              return (
                  <RestaurantCard onClick={() => {restaurantProfileHandler(props,restaurant_id)}} >
                      <Link style={{height: "100%", width: "100%"}} to="/restaurant-profile/">
                      <RestaurantNameContainer>
                          <RestaurantTitle>{res.name}</RestaurantTitle>
                          <AddressTitle>{res.street}</AddressTitle>
                      </RestaurantNameContainer>
                      <StarsRatingContainer>
                          <div>{renderStars(randomNum)}</div>
                          <RatingTitle>{randomNum}</RatingTitle>
                      </StarsRatingContainer>
                      <BottomPhotoContainer>
                          <img
                              src={res.image}
                          />
                      </BottomPhotoContainer>
                      </Link>
                  </RestaurantCard>
              );
          });

      } else {

          return (
              <DonutSpinner></DonutSpinner>
          )
      }

  };
  return <TopFourRestWrapper>{renderTopFourRestaurants(props)}</TopFourRestWrapper>;
};

export default TopFour;

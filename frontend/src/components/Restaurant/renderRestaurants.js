import {
  AddressTitle,
  BottomPhotoContainer,
  RatingTitle, RestaurantCard,
  RestaurantNameContainer,
  RestaurantTitle,
  StarsRatingContainer
} from "../../styles/cardDesign";
import React from "react";
import {
  RenderRestaurantsWrapper,
  RenderRestaurantsWrapperSub,
  RestaurantCardSearch
} from "../../styles/restaurants";
import { renderStars } from "../Homepage/TopFour/starRenderFunction";
import {useFetch} from "../../hooks/useFetch";
import {DonutSpinner} from "../../styles/buttons";
import setRestaurantFunction from "../../store/actions/setRestaurantAction";
import {Link} from "react-router-dom";

// To link with Backend to render

const RestaurantsRender = (props) => {


  const URL = "https://taurus-luna.propulsion-learn.ch/backend/api/restaurants/";

  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const config = {
    method: "GET",
    headers
  };

  const [response, error] = useFetch(URL, config);

  const renderRestaurants = (props) => {
      const restaurantProfileHandler = (props,restaurant_id) => {
            props.props.dispatch(setRestaurantFunction(restaurant_id));
      }

    if(response){
    return response.map(res => {
      const randomNum = Math.floor(Math.random() *  (100 - 70 + 1) + 70) ;
      const  restaurant_id = res.id;

      return (
        <RestaurantCardSearch  onClick={() => {restaurantProfileHandler(props,restaurant_id)}}>
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
              alt="Photo of restaurant"
            />
          </BottomPhotoContainer>
          </Link>
        </RestaurantCardSearch>
      );
    });
    } else {
      return(
          <DonutSpinner></DonutSpinner>
      )
    }
  };


  return (
    <RenderRestaurantsWrapper>
      <RenderRestaurantsWrapperSub>

        {renderRestaurants(props)}

      </RenderRestaurantsWrapperSub>
    </RenderRestaurantsWrapper>
  );
};

export default RestaurantsRender;

import React from "react";
import { useHistory } from "react-router-dom";

import { MiddleContainer } from "../../styles/containers";
import {
  RestaurantSearchFormLeft,
  RestaurantSearchFormRight,
  SearchRestaurantsWrapper,
  SearchTitles,
  SearchWrapper,
  SearchWrapperChosen,
  SearchWrapperSub
} from "../../styles/restaurants";
import { Categories } from "../Categories";
import ReviewsRender from "./renderReviews";

const Reviews = () => {
  const history = useHistory();

  return (
    <MiddleContainer>
      <SearchRestaurantsWrapper>
        <RestaurantSearchFormLeft placeholder="Search" type="text" />
        <RestaurantSearchFormRight>
          <option value="" disabled selected>
            Select a category...
          </option>

          <Categories />
        </RestaurantSearchFormRight>
      </SearchRestaurantsWrapper>
      <SearchWrapper>
        <SearchWrapperSub onClick={() => history.push("/restaurants")}>
          <SearchTitles>RESTAURANTS</SearchTitles>
        </SearchWrapperSub>
        <SearchWrapperChosen>
          <SearchTitles>REVIEWS</SearchTitles>
        </SearchWrapperChosen>
        <SearchWrapperSub onClick={() => history.push("/users")}>
          <SearchTitles>USERS</SearchTitles>
        </SearchWrapperSub>
      </SearchWrapper>
      <ReviewsRender />
    </MiddleContainer>
  );
};

export default Reviews;

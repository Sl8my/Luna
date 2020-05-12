import React from "react";
import {useHistory, withRouter} from "react-router-dom";

import { MiddleContainer } from "../../styles/containers";
import TopFour from "../Homepage/TopFour";
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
import RestaurantsRender from "./renderRestaurants";
import {connect} from "react-redux";

function Restaurant(props) {
  const history = useHistory()

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
        <SearchWrapperChosen>
          <SearchTitles>RESTAURANTS</SearchTitles>
        </SearchWrapperChosen>
        <SearchWrapperSub onClick={() => history.push("/reviews")}>
          <SearchTitles >REVIEWS</SearchTitles>
        </SearchWrapperSub>
        <SearchWrapperSub onClick={() => history.push("/users")}>
          <SearchTitles >USERS</SearchTitles>
        </SearchWrapperSub>
      </SearchWrapper>
      <RestaurantsRender props={props} />
    </MiddleContainer>
  );
};

const mapStateToProps = state => {
    return {
        ...state,
        content: state.content,
      };
    };

export default withRouter(connect(mapStateToProps)(Restaurant));

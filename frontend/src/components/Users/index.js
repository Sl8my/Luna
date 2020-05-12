import React from "react";
import { useHistory } from "react-router-dom";

import { MiddleContainer } from "../../styles/containers";
import {

  RestaurantSearchFormLeft,
  SearchRestaurantsWrapper,
  SearchTitles,
  SearchWrapper,
  SearchWrapperChosen,
  SearchWrapperSub
} from "../../styles/restaurants";
import UsersRender from "./renderUsers";

const Users = () => {
  const history = useHistory();

  return (
    <MiddleContainer>
      <SearchRestaurantsWrapper>
        <RestaurantSearchFormLeft placeholder="Search" type="text" />

      </SearchRestaurantsWrapper>
      <SearchWrapper>
        <SearchWrapperSub onClick={() => history.push("/restaurants")}>
          <SearchTitles >RESTAURANTS</SearchTitles>
        </SearchWrapperSub>
        <SearchWrapperSub onClick={() => history.push("/reviews")}>
          <SearchTitles >REVIEWS</SearchTitles>
        </SearchWrapperSub>
        <SearchWrapperChosen>
          <SearchTitles >USERS</SearchTitles>
        </SearchWrapperChosen>
      </SearchWrapper>
      <UsersRender />
    </MiddleContainer>
  );
};

export default Users;

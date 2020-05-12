import React from "react";
import { useHistory } from "react-router-dom";

import { MiddleContainer } from "../../styles/containers";
import SingleRestaurantRender from "./renderSingleRestaurant";

const RestaurantProfile = () => {
  const history = useHistory();

  return (
    <MiddleContainer>
      <SingleRestaurantRender />
    </MiddleContainer>
  );
};

export default RestaurantProfile;

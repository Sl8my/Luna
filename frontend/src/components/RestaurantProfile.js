import React, {useEffect} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SingleRestaurantRender from "./RestaurantProfile/renderSingleRestaurant";
import {RenderRestaurantsWrapper, RenderRestaurantsWrapperSub} from "../styles/restaurantProfile";
import getRestaurantProfileFunction from "../store/actions/getRestaurantProfileAction";
import getRestaurantReviewsFunction, {getRestaurantReviewsAction} from "../store/actions/getRestaurantReviews";

function RestaurantProfile(props) {

    useEffect(() => {
        const restaurant_id = props.RestaurantReducer.profile_restaurant;
        props.dispatch(getRestaurantProfileFunction(props, restaurant_id));
        props.dispatch(getRestaurantReviewsFunction(props, restaurant_id));
    }, [props.RestaurantReducer.restaurant.id]);

        return (
            <RenderRestaurantsWrapper>
                <RenderRestaurantsWrapperSub>
                    <SingleRestaurantRender
                        props={props}
                    />
                </RenderRestaurantsWrapperSub>
            </RenderRestaurantsWrapper>

        );

}

const mapStateToProps = state => {
    return {
        ...state,
        content: state.content,
      };
    };

export default withRouter(connect(mapStateToProps)(RestaurantProfile));

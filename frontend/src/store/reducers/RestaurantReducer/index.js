import {restaurantprofile, restaurantreviews, setrestaurant} from "../../types";

const initialState = {
    restaurant: [],
    reviews: [],
    profile_restaurant: "",

};


const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case restaurantprofile: {
            return {
                ...state,
                restaurant: action.payload,
    }}
    case restaurantreviews: {
            return {
                ...state,
                reviews: action.payload,
    }}
    case setrestaurant: {
            return {
                ...state,
                profile_restaurant: action.payload,
    }}
      default: {
            return state
        }
    }

}
export default RestaurantReducer;
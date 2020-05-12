import { setrestaurant } from "../../store/types";

export const setRestaurantAction = content => ({
    type: setrestaurant,
    payload: content
});


const setRestaurantFunction = (content) => (dispatch) => {
        dispatch(setRestaurantAction(content));
};

export default setRestaurantFunction;
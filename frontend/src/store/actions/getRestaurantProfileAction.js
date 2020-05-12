import {restaurantprofile} from "../../store/types";

export const getRestaurantProfileAction = content => ({
    type: restaurantprofile,
    payload: content
});


const getRestaurantProfileFunction = (props, restaurant_id) => (dispatch) => {
    const URL = `https://taurus-luna.propulsion-learn.ch/backend/api/restaurants/${restaurant_id}/`;


    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const config = {
        method: 'GET',
        headers
    };

    fetch(URL, config)
    .then(res => res.json())
    .then(data => {
        const content = data;
        dispatch(getRestaurantProfileAction(content));
    })

};

export default getRestaurantProfileFunction;
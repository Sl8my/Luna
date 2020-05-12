import {restaurantreviews} from "../../store/types";

export const getRestaurantReviewsAction = content => ({
    type: restaurantreviews,
    payload: content
});


const restaurant_id = 1;

const URL = `https://taurus-luna.propulsion-learn.ch/backend/api/reviews/restaurant/${restaurant_id}/`;


const getRestaurantReviewsFunction = (props) => (dispatch) => {
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
        dispatch(getRestaurantReviewsAction(content));
    })

};

export default getRestaurantReviewsFunction;
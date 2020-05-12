import {userprofiledetails} from "../../types";

const initialState = {
    userprofile_details: [],
};


const UserProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case userprofiledetails: {
            return {
                ...state,
                userprofile_details: action.payload,
    }}

      default: {
            return state
        }
    }

}
export default UserProfileReducer;
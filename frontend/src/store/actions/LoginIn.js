export const loginInAction = (user) => async (dispatch) => {

    const config = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(user),
    };

    //WAITING FOR THE RIGHT URL API TOKEN
    const response = await fetch('https://motion.propulsion-home.ch/backend/api/auth/token/', config)

    const resp = await response.json();

    const action = {
        type: 'setCurrentUser',
        payload: resp.access
    };
    localStorage.setItem('token', resp.access)


    console.log("user: ", resp.user)
    console.log("token: ", resp.access)
    console.log("response: ", response)
    dispatch(action);
    return (response.status)

}


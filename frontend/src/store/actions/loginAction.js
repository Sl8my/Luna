const URL = 'https://taurus-luna.propulsion-learn.ch/backend/api/auth/token/';

export const loginFunction =  data   => async(dispatch) => {
    const headers = new Headers({
        "Content-Type": "application/json"
    });

    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers
    };


    const apiInformation = await fetch(URL, config).then(res => res.ok);

    console.log(config,apiInformation)

    if (!apiInformation) {
        return 'not ok'
    } else {
        return 'ok'
    }

}
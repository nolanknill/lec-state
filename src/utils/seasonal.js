export const convertCToF = (temperatureC) => {
    return temperatureC * 1.8 + 32;
}

export const favoriteMonth = () => {
    if (Math.random() <= 0.5) {
        return "June";
    } else {
        return "September";
    }
}

/*
API_KEY = "grogu";
const endpoint = "https://project-2-api.herokuapp.com"

export const getComments = () => {
    return axios.get(endpoint + "/comments?API_KEY=" + API_KEY);
}

getComments().then(response => {


})
*/

// Other examples of values you'd have in a util file
// The endpoint: "https://project-2-api.herokuapp.com"
// API KEY: "grogu"
import axios from "axios";

const SEARCH = "SEARCH";

const search = (data) => ({
    type: SEARCH,
    data,
})

export const searchData = (city) => dispatch => {
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e37765b450e746aebdb3da151817bae`)
        .then((res) => dispatch(search(res.data)))
}
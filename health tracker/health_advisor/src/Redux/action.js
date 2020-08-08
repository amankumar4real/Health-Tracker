import { fetch_cal, fetch_succ, fetch_fail, reg_start, reg_succ, reg_fail, log_start, log_succ, log_fail, log_out, data_update, data_update_succ, data_update_fail, add_task_food, remove_data, fetch_news, fetch_news_succ, fetch_news_fail, change_login_type, change_reg_type} from "./actionType";
import axios from "axios"
// import Register from "../components/Register";

export const fetchCal = payload => ({
    type: fetch_cal,
    payload
})

export const fetchSucc = payload => ({
    type: fetch_succ,
    payload
})

export const fetchFail = payload => ({
    type: fetch_fail,
    payload
})

export const regStart = payload => ({
    type: reg_start,
    payload
})

export const regSucc = payload => ({
    type: reg_succ,
    payload
})

export const regFail = payload => ({
    type: reg_fail,
    payload
})

export const logStart = payload => ({
    type: log_start,
    payload
})

export const logSucc = payload => ({
    type: log_succ,
    payload
})

export const logFail = payload => ({
    type: log_fail,
    payload
})

export const logOut = payload => ({
    type: log_out,
    payload
})

export const dataUpdate = payload => ({
    type: data_update,
    payload
})

export const dataUpdateSucc = payload => ({
    type: data_update_succ,
    payload
})

export const dataUpdateFail = payload => ({
    type: data_update_fail,
    payload
})

export const addTaskFood = payload => ({
    type: add_task_food,
    payload
})

export const removeData = payload => ({
    type: remove_data,
    payload
})

export const fetchNews = payload => ({
    type: fetch_news,
    payload
})

export const fetchNewsSucc = payload => ({
    type: fetch_news_succ,
    payload
})

export const fetchNewsFail = payload => ({
    type: fetch_news_fail,
    payload
})

export const changeLoginType = payload => ({
    type: change_login_type,
    payload
})

export const changeRegType = payload => ({
    type: change_reg_type,
    payload
})

// axios for fetch calories
export const findCal = payload => dispatch => {
    console.log(payload)
    dispatch(fetchCal)

    return axios.post("https://healthtrackerbackend.amankumar.co/calculate",payload)
    .then(res=>res.data)
    .then(res=>dispatch(fetchSucc(res)))
    .catch(error=>dispatch(fetchFail(error)))
}

// axios for fetch Register
export const fetchReg = payload => dispatch => {
    console.log(payload)
    dispatch(regStart)

    return axios.post("https://healthtrackerbackend.amankumar.co/register", payload)
    .then(res=>res.data)
    .then(res=>dispatch(regSucc(res)))
    .catch(error=>dispatch(regFail(error)))
}

// axios for login
export const fetchLog = payload => dispatch =>{
    console.log(payload)
    dispatch(logStart)

    return axios.post("https://healthtrackerbackend.amankumar.co/login", payload)
    .then(res=>res.data)
    .then(res=>dispatch(logSucc(res)))
    .catch(error=>dispatch(logFail(error)))
} 

// axios for updating data
export const updateUser = payload => dispatch => {
    console.log(payload)
    dispatch(dataUpdate)

    return axios.post("https://healthtrackerbackend.amankumar.co/update", payload)
    .then(res=>res.data)
    .then(res=>dispatch(dataUpdateSucc(res)))
    .catch(error=>dispatch(dataUpdateFail(error)))
}

// axios for fetching indian health news
export const fetchHealthNews = payload => dispatch => {
    console.log("payload")
    dispatch(fetch_news)

    return axios.get("https://gnews.io/api/v3/search?q=health&token=d8108517213aea411f1d225be7e2f0be")
    .then(res=>dispatch(fetchNewsSucc(res)))
    .catch(error=>dispatch(fetchNewsFail(error)))
}
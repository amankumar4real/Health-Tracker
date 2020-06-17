import {fetch_cal, fetch_succ, fetch_fail, reg_start, reg_succ, reg_fail, log_start, log_succ, log_fail, log_out, data_update, data_update_succ, data_update_fail, add_task_food, remove_data, fetch_news, fetch_news_succ, fetch_news_fail, change_login_type, change_reg_type} from "./actionType";

const initState = {
    data: 0,
    reg_data: "",
    log: false,
    logged_id: 0,
    calorieNeed: 0,
    food:"",
    task:"",
    food_cal:"",
    task_cal:"",
    logged_user: {},
    news_data: [],
    login_type:"",
    reg_type:""
}

export default(state = initState, {type, payload}) => {
    
    switch(type){

        case fetch_cal:
            return{
                ...state
                
            }

        case fetch_succ:
            return{
                ...state,
                data:payload,
                calorieNeed: parseInt(payload)
            }

        case fetch_fail:
            return{
                ...state
            }

        case reg_start:
            return{
                ...state
            }
        
        case reg_succ:
            console.log(payload)
            return{
                ...state,
                reg_data: payload,
                reg_type: payload["message"]
            }

        case reg_fail:
            return{
                ...state
            }

        case log_start:
            return{
                ...state
            }

        case log_succ:
            console.log(payload)

            if (payload["message"] !== "email or password is wrong!"){
                return{
                ...state,
                log: true,
                logged_user: payload.data,
                calorieNeed: payload.data["cal"],
                logged_id: payload.data["ids"],
                food: payload.data["food"].split("|"),
                task: payload.data["task"].split("|"),
                food_cal: payload.data["food_cal"].split("|"),
                task_cal: payload.data["task_cal"].split("|"),
                
                }
            }
            else{
                return{
                    ...state,
                    login_type: payload["message"]
                }
            }

        case log_fail:
            return{
                ...state,
            }
        
        case log_out:
            console.log("test")
            return{
                ...state,
                log: false
            }

        case data_update:
            return{
                ...state
            }
        
        case data_update_succ:
            console.log(payload)
            return{
                ...state
            }
        
        case data_update_fail:
            return{
                ...state
            }

        case add_task_food:
            if(payload[0] == "food"){
                console.log(payload)
                return{
                    ...state,
                    food: [...state.food, payload[1]],
                    food_cal: [...state.food_cal, payload[2]]
                }
            }
            else{
                return{
                    ...state,
                    task: [...state.task, payload[1]],
                    task_cal: [...state.task_cal, payload[2]]
                }
            }

        case remove_data:
            var fo = []
            var fo_c = []

            var ta = []
            var ta_c = []
            if(payload[0] == "food"){
                for(var k=0; k<state.food.length; k++){
                    if(k != parseInt(payload[1])){
                        fo.push(state.food[k])
                        fo_c.push(state.food_cal[k])
                    }
                }
                return{
                    ...state,
                    food:fo,
                    food_cal:fo_c
                }
            }
            else{
                for(var k=0; k<state.task.length; k++){
                    if(k != payload[1]){
                        ta.push(state.task[k])
                        ta_c.push(state.task_cal[k])
                    }
                }
                return{
                    ...state,
                    task:ta,
                    task_cal:ta_c
                }
            }

        case fetch_news:
            return{
                ...state
            }

        case fetch_news_succ:
            console.log(payload)
            return{
                ...state,
                news_data:payload
            }
        
        case fetch_news_fail:
            return{
                ...state
            }

        case change_login_type:
            return{
                ...state,
                login_type:""
            }

        case change_reg_type:
            return{
                ...state,
                reg_type:""
            }

        default:
            return state
    }
    
}
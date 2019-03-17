import {combineReducers} from "redux"
import ThreadReducer from "./ThreadReducer"
import {reducer as formReducer} from "redux-form"
import SubsReducer from './SubsReducer'


export default combineReducers({
    threads:ThreadReducer,
    form: formReducer,
    subs: SubsReducer
})
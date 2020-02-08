import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import { reducer as reduxFormReducer } from 'redux-form';
import skillReducer from "./skillReducer";
import professionalReducer from "./professionalReducer";
import academicReducer from "./academicReducer";
// import { skillReducer } from './skillReducer'

const rootReducer = combineReducers({
    form: reduxFormReducer,
    profile: profileReducer,
    skills:skillReducer,
    professionals:professionalReducer,
    academics:academicReducer
});
export default rootReducer;
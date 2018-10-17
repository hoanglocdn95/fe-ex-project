import { combineReducers } from "redux";
import showHot from "./bodyHot";
import showNew from "./bodyNew";
import showAll from "./bodyAll";
import getUser from "./login";
const myReducer = combineReducers({
    showHot,
    showNew,
    showAll,
    getUser
});
export default myReducer;

import {TypeAction} from '../actions';
const initialState = [];
const bodyAll=(state= initialState,action)=>{
    switch (action.type) {
        case TypeAction.SHOW_ALL:
            state = action.list;
            return state;
        default:
            return state;
    }
}
export default bodyAll;

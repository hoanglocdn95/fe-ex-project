import {TypeAction} from '../actions';
const initialState = [];
const bodyHot=(state= initialState,action)=>{
    switch (action.type) {
        case TypeAction.SHOW_HOT:
            state = action.list;
            return state;
        default:
            return state;
    }
}
export default bodyHot;
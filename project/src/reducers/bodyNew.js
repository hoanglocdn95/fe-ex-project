import {TypeAction} from '../actions';
const initialState = [];
const bodyNew=(state= initialState,action)=>{
    switch (action.type) {
        case TypeAction.SHOW_NEW:
            state = action.list;
            return state;
        default:
            return state;
    }
}
export default bodyNew;
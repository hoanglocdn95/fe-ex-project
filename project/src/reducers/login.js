import { TypeAction } from '../actions';
const initialState = [];
const login = (state = initialState, action) => {
    switch (action.type) {
        case TypeAction.GET_USER:
            state = action.user;
            return state;
        default:
            return state;
    }
}
export default login;
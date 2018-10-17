import axios from 'axios';
//Body
export const showHot = (list) => ({
    type: 'SHOW_HOT',
    list
});
export const fetchItemHot = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/item?hot=1&_start=0&_end=4')
            .then(response => {
                dispatch(showHot(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const showNew = (list) => ({
    type: 'SHOW_NEW',
    list
});
export const fetchItemNew = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/item?_sort=id&_order=desc&_start=0&_end=4')
            .then(response => {
                dispatch(showNew(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const showAll = (list) => ({
    type: 'SHOW_ALL',
    list
});
export const fetchAll = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/item?&_start=0&_end=8')
            .then(response => {
                dispatch(showAll(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
//Body-detail
export const showDetail = (list, id) => ({
    type: 'SHOW_DETAIL',
    list,
    id
});
//Register
export const addUser = (user) => {
    return () => {
        return axios.post('http://localhost:3001/user',
            user
        ).catch(error => {
            throw (error);
        });
    };
};
//Login
export const getUser = (user) => ({
    type: 'GET_USER',
    user
})
export const fetchUser = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/user')
            .then(response => {
                dispatch(getUser(response.data))
                console.log(response.data)
            })
            .catch(error => {
                throw (error);
            });
    };
};
//type-action
export const TypeAction = {
    SHOW_HOT: 'SHOW_HOT',
    SHOW_NEW: 'SHOW_NEW',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DETAIL: 'SHOW_DETAIL',
    GET_USER: 'GET_USER'
}
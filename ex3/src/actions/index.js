export const editList = (id,displayList) =>({
    type: 'EDIT_LIST',
    id,
    displayList
});
export const saveList = (id, value) =>({
    type: 'SAVE_LIST',
    id, 
    value
});
export const addList = (value) => ({
    type: 'ADD_LIST',
    value
});
export const deleteList = (id) => ({
    type: 'DELETE_LIST',
    id
});
export const TypeAction ={
    DELETE_LIST: 'DELETE_LIST',
    ADD_LIST: 'ADD_LIST',
    SAVE_LIST: 'SAVE_LIST',
    EDIT_LIST: 'EDIT_LIST'
}

import * as types from "../types/TodoType";

export const addItem = text => ({
    type: types.ADD_ITEM,
    text
})

export const deleteItem = id => {
    return ({
        type: types.DELETE_ITEM,
        id
    })
}

export const editItem = (id, text) => ({
    type: types.EDIT_ITEM,
    id,
    text 
})

export const completeItem = id => ({
    type : types.COMPLETE_ITEM,
    id
})

export const setVisibilityFilter = filter => ({
     type: types.SET_VISIBILITY_FILTER,
     filter
})

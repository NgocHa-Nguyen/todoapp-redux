import * as types from "../types/TodoType";
import { request } from "../unitls/apiRequest";
export const addItem = text => ({
  type: types.ADD_ITEM,
  text
});

export const deleteItem = id => ({
  type: types.DELETE_ITEM,
    id
});

export const editItem = (id, text) => ({
  type: types.EDIT_ITEM,
  id,
  text
});

export const completeItem = (id, boolean) => ({
  type: types.COMPLETE_ITEM,
  payload: { id, boolean }
});


export const getData = () => {
  return async dispatch => {
    try {
      let resp;
      resp = await request("dummy.restapiexample.com/api/v1/employees", "get");
      dispatch(setFetchData(resp))
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFetchData = fetchData => ({
  type : types.GET_DATA,
  data : fetchData
})



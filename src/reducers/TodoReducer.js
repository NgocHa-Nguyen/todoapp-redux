import {
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  COMPLETE_ITEM,
  GET_DATA
} from "../types/TodoType";

const initialState = {
  listDone: [
    { id: 0, title: "GotoSchool", description: "6h", isCompleted: true }
  ],
  listActive: [
    { id: 1, title: "GotomMarket", description: "10h", isCompleted: false }
  ]
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const item = {...state};
      item.listActive.push({
        id: Date.now(),
        isCompleted: false,
        title: action.text.title,
        description: action.text.description
      });
      return item;
    }
    case DELETE_ITEM: {
      const newState = { ...state };
      let listDone = newState.listDone;
      let listActive = newState.listActive;

      listDone.map(item => {
        if (item.id === action.id) {
          listDone = listDone.filter(Item => Item.id !== action.id);
        }
      });
      listActive.map(item => {
        if (item.id === action.id) {
          listActive = listActive.filter(Item => Item.id !== action.id);
        }
      });
      return { ...state, listDone, listActive };
    }
    case EDIT_ITEM: {
      // const newState = {...state}
      return {}
    }
    case COMPLETE_ITEM: {
      const newState = { ...state };
      let listDone = newState.listDone;
      let listActive = newState.listActive;
      console.log(action.payload.boolean);
      if (action.payload.boolean) {
        listDone.map(item => {
          if (item.id === action.payload.id) {
            item.isCompleted = false;
            listActive.push(item);
            listDone = listDone.filter(Item => Item.id !== action.payload.id);
          }
        });
      } else
        listActive.map(item => {
          if (item.id === action.payload.id) {
            item.isCompleted = true;
            listDone.push(item);
            listActive = listActive.filter(
              Item => Item.id !== action.payload.id
            );
          }
        });
      console.log(listDone, listActive);
      return { ...state, listDone, listActive };
    }
    case GET_DATA: {
      console.log(action.data.data.data);
      return state;
    }
    // const newData = action.data.data.data;
    // return {
    // ...state,
    // data: newData
    // }
    default:
      return state;
  }
}

import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, COMPLETE_ITEM  } from "../types/TodoType";

const initialState =[
  { id: 0, title: 'GotoSchool', isCompleted: false },
  { id: 1,  title: 'GotoBed', isCompleted: true },
  { id: 2,  title: 'Go out', isCompleted: true },
];

export default function items(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: 
      return [
        ...state,
        {
          id: state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
          isCompleted: false,
          title: action.text.title,
          description: action.text.description
        }
      ];
    case DELETE_ITEM:
      return state.filter(item =>
        item.id !== action.id
      )
    case EDIT_ITEM:
      return state.map(item =>
        item.id === action.id ?
          { ...item, text: action.text } :
          item
      )
    case COMPLETE_ITEM:
      return state.map(item =>
        item.id === action.id ?
          { ...item, isCompleted: !item.isCompleted } :
          item
      )
      
    default:
      return state;
  }
}
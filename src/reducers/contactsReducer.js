import { ADD_CONTACT, DELETE_CONTACT, CHANGE_INPUT_TEXT, SEARCH_CONTACT } from '../actions/SessionActions'
const initialState ={
    contacts: [],
    filteredNews: [],
    message: ''
}
export default (state = initialState , action) => {
    switch (action.type) {
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts,
          {
            id: action.id,
            name: action.name,
            secondName: action.secondName
          }]
        }
        case CHANGE_INPUT_TEXT:
            return Object.assign({}, state, {message: action.message})
        case DELETE_CONTACT: {
          return {
            ...state,
            contacts: state.contacts.filter(news => news.id !== action.id),
          };
        }
        case SEARCH_CONTACT: {
          const { name } = action;
          return {
            ...state,
            name,
            contacts: state.contacts.filter(value => {if (!value || typeof value === "string") { return value.search(name)}})
          }
        }
          default:
            return state 
    }
  }
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_INPUT_NAME, CHANGE_INPUT_SECONDNAME, CHANGE_INPUT_SEARCHNAME } from '../actions/SessionActions'

const initialState ={
    contacts: [],
    filteredContacts: [],
    name: '',
    secondName: '',
    searchName: ''
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
        case CHANGE_INPUT_NAME:
            return Object.assign({}, state, {name: action.name})
        case CHANGE_INPUT_SECONDNAME:
            return Object.assign({}, state, {secondName: action.secondName})
        case CHANGE_INPUT_SEARCHNAME:
            return Object.assign({}, state, {searchName: action.searchName})
        case DELETE_CONTACT: {
          return {
            ...state,
            contacts: state.contacts.filter(news => news.id !== action.id),
          };
        }
          default:
            return state 
    }
  }
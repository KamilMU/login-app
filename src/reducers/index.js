import { combineReducers } from 'redux'
import session from './session'
import contacts from './contactsReducer'

export default combineReducers({
  session,
  contacts
})

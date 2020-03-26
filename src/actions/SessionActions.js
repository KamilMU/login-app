import { checkCredentials } from '../helpers/session'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
export const ADD_CONTACT = 'ADD_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'
export const SEARCH_CONTACT = 'SEARCH_CONTACT'
export const CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME'
export const CHANGE_INPUT_SECONDNAME = 'CHANGE_INPUT_SECONDNAME'
export const CHANGE_INPUT_SEARCHNAME = 'CHANGE_INPUT_SEARCHNAME'

let nextTodoId = 0
export const addContact = (name, secondName) => ({
  type: 'ADD_CONTACT',
  id: nextTodoId++,
  name,
  secondName
})

export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  id
})

export const changeInputName = name=> ({
  type: 'CHANGE_INPUT_NAME',
  name
})
export const changeInputSecondName = secondName => ({
  type: 'CHANGE_INPUT_SECONDNAME',
  secondName
})
export const changeInputSearchName = searchName => ({
  type: 'CHANGE_INPUT_SEARCHNAME',
  searchName
})

export function logIn(params, cb) {
  return dispatch => {
    if (checkCredentials(params)) {
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.username,
        },
      })
      cb()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: 'Имя пользователя или пароль введены не верно',
        },
        error: true, // https://github.com/redux-utilities/flux-standard-action
      })
    }
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}

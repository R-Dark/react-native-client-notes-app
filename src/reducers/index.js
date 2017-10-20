import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import NoteFormReducer from './NoteFormReducer'
import ClientReducer from './ClientReducer'

export default combineReducers({
  auth: AuthReducer,
  noteForm: NoteFormReducer,
  clients: ClientReducer
})

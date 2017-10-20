import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  CLIENT_UPDATE,
  NOTE_CREATE,
  CLIENTS_FETCH_SUCCESS
} from './types'


export const clientUpdate = ({ prop, value }) => {
  return {
    type: CLIENT_UPDATE,
    payload: { prop, value }
  }
}
//this firebase call saves/pushes a new object into database
export const noteCreate = ({ name, notes }) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/client`)
    .push({ name, notes })
    .then(() => {
      dispatch({ type: NOTE_CREATE })
      Actions.main({ type: 'reset' })
    })
  }
}
//this firebase call fetchs the whole bucket of data that we then convert from an object into an array and display
export const clientsFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/client`)
      .on('value', snapshot => {
        dispatch({ type: CLIENTS_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}

//this firebase call edits a specific key. pay attention to the uid
export const noteSave = ( name, notes, uid ) => {
  const { currentUser } = firebase.auth()
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/client/${uid}`)
      .set({ notes })
      .then(() => console.log('saved'))
  }
}

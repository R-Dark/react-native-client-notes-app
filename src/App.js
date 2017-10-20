import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import { Header } from './components/common'
import Router from './Router'

class App extends Component {
  componentWillMount() {
    const config = {
      // apiKey: "AIzaSyAIp9eBuTifJiHCt0cNsmQUDrUVJ41syDU",
      // authDomain: "authentication-ad679.firebaseapp.com",
      // databaseURL: "https://authentication-ad679.firebaseio.com",
      // projectId: "authentication-ad679",
      // storageBucket: "authentication-ad679.appspot.com",
      // messagingSenderId: "524780895566"
      apiKey: "AIzaSyBQOhwOXzIiD05046Z7VSm6p9NV717ir80",
      authDomain: "bellatorum-app.firebaseapp.com",
      databaseURL: "https://bellatorum-app.firebaseio.com",
      projectId: "bellatorum-app",
      storageBucket: "bellatorum-app.appspot.com",
      messagingSenderId: "1069441860314"
  };

  firebase.initializeApp(config);
}


  render() {
    store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
            <Router />
      </Provider>
    )
  }
}

export default App

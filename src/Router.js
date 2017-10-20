import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import ClientList from './components/ClientList'
import NoteCreate from './components/NoteCreate'
import NoteEdit from './components/NoteEdit'

const RouterComponent = () => {
  return (
    <Router>

      <Scene key='root' hideNavBar={true}>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene
            onRight={() => Actions.noteCreate()}
            rightTitle='Add Note'
            key='clientList'
            component={ClientList}
            title='Clients'
            initial
            />
          <Scene key='noteCreate' component={NoteCreate} title='Add Note' />
          <Scene key='noteEdit' component={NoteEdit} title='Edit Note' />
        </Scene>



      </Scene>

    </Router>
  );
};

export default RouterComponent

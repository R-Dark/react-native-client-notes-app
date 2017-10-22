import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import ClientList from './components/ClientList'
import NoteCreate from './components/NoteCreate'
import NoteEdit from './components/NoteEdit'
import ClientSearch from './components/ClientSearch'

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} backButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>

      <Scene key='root' hideNavBar={true}>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" />
        </Scene>

        <Scene key="main">
          <Scene
            key='clientSearch'
            rightTitle='Clients'
            onRight={() => Actions.clientList()}
            component={ClientSearch}
            title='Search'
            initial
          />
          <Scene
            key='clientList'
            component={ClientList}
            title='Clients'
            />
          <Scene key='noteCreate' component={NoteCreate} title='Add Note' />
          <Scene key='noteEdit' component={NoteEdit} title='Client Details' />
        </Scene>



      </Scene>

    </Router>
  );
};

styles = {
navBar: {
    backgroundColor:'#0D47A1',
},
navBarTitle:{
    color:'#FFFFFF'
},
barButtonTextStyle:{
    color:'#FFFFFF'
},
barButtonIconStyle:{
    tintColor:'rgb(255,255,255)'
}
}
export default RouterComponent

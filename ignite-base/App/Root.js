import React from 'react'
import { View, Text, Navigator, StatusBar } from 'react-native'
// import {Router, Routes, NavigationBar} from './Navigation/'
import { Router, Scene } from 'react-native-router-flux'
import configureStore from './Store/Store'
import { Provider } from 'react-redux'
import Actions from './Actions/Creators'
// import Drawer from 'react-native-drawer'
import DebugSettings from './Config/DebugSettings'
import './Config/PushConfig'

// Styles
import styles, {drawerStyles} from './Containers/Styles/RootStyle'

import PresentationScreen from './Containers/PresentationScreen'

const store = configureStore()

export default class RNBase extends React.Component {

  componentWillMount () {
    const { dispatch } = store
    dispatch(Actions.startup())
  }

  componentDidMount () {
    // this.navigator.drawer = this.drawer
  }

  renderDrawerContent () {
    return (
      <View style={{marginTop: 30, padding: 10}}>
        <Text style={{color: 'white'}}>
          Drawer Content Goes Here!
        </Text>
      </View>
    )
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />

          <Router>
            <Scene key='Root'>
              <Scene key='PresentationScreen' component={PresentationScreen} initial />
            </Scene>
          </Router>
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}

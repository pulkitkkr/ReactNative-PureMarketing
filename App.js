/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AndroidApp from './src-android/modules/app/';

export default class App extends Component {
  render() {
    var componentToRender = '';
    if(Platform.OS === 'ios'){
      componentToRender = <Text>Hello</Text>;
    }else{

      componentToRender = <AndroidApp/>;
    }
    return (
      <View >
      {
        componentToRender
      }        
      </View>
    );
  }
}


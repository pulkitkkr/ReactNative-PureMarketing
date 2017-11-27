import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import AllReducers from '../../reducers/'
import {createStore, applyMiddleware,compose,configureStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
const store = createStore(AllReducers);
class AndroidApp extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return(
			<Provider store={store}>
				<View>
					<Text>
						This is Android App.js
					</Text>
				</View>
			</Provider>
		)
	}
}
export default AndroidApp;
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Conponents Imports
import store from './store';
import { createStore } from 'redux';
import Routers from './AppRoutes'

//FIREBASE 
import * as firebase from 'firebase';
import config from './Firebase.Config';
firebase.initializeApp(config);

const root = document.getElementById('root');

class AppComponent extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <MuiThemeProvider>
                    <Provider store={store}>
                        <Routers />
                    </Provider>
                </MuiThemeProvider>
            </div>
        );
    }
}


ReactDOM.render(
    <AppComponent />,
    root
)
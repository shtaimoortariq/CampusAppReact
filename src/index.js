import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import SignUp from './components/SignUp';
//import {ShoppingList2} from './ShoppingList2'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const root = document.getElementById('root');

class AppComponent extends React.Component {
    render() {
        return (

            <div className="shopping-list">
                <MuiThemeProvider>
                    <Router>
                        <div>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/signup" component={SignUp} />
                        </div>
                    </Router>
                </MuiThemeProvider>
            </div>


        );
    }
}


ReactDOM.render(
    <AppComponent />,
    root
)
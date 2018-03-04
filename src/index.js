import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ShoppingList1 from './ShoppingList1';
//import ShoppingList2 from './ShoppingList2';
//import {ShoppingList2} from './ShoppingList2'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const root = document.getElementById('root');

class AppComponent extends React.Component {
    render() {
        return (

            <div className="shopping-list">
                <MuiThemeProvider>
                    <Router>
                    <ShoppingList1 name="Taimoor" />
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
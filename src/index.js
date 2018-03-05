import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Conponents Imports
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

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
                            <Route exact path="/dashboard" component={Dashboard} />
                            
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
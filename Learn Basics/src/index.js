import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Conponents Imports

import { createStore } from 'redux';

import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import StudentDetails from './components/Dashboard/StudentDetails/StudentDetails';
import StudentJobs from './components/Dashboard/StudentJobs/StudentJobs';
import ViewCompanies from './components/Dashboard/ViewCompanies/ViewCompanies';


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
                            <Route exact path="/studentdashboard" component={Dashboard} />
                            <Route exact path="/studentdashboard/studentdetails" component={StudentDetails} />
                            <Route exact path="/studentdashboard/studentjobs" component={StudentJobs} />
                            <Route exact path="/studentdashboard/viewcompanies" component={ViewCompanies} />                            

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
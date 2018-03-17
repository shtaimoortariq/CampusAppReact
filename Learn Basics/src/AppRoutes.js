import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';


// Conponents Imports
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import StudentDetails from './components/Dashboard/StudentDetails/StudentDetails';
import StudentJobs from './components/Dashboard/StudentJobs/StudentJobs';
import ViewCompanies from './components/Dashboard/ViewCompanies/ViewCompanies';


import history from './History';

// export const history = createBrowserHistory()

class AppRoutes extends Component {
    render() {
        return (
            <Router history={history}>
                <div>   
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/studentdashboard" component={Dashboard} />
                    <Route exact path="/studentdashboard/studentdetails" component={StudentDetails} />
                    <Route exact path="/studentdashboard/studentjobs" component={StudentJobs} />
                    <Route exact path="/studentdashboard/viewcompanies" component={ViewCompanies} />   
                    
                </div>
            </Router>
        )
    }
}

export default AppRoutes;
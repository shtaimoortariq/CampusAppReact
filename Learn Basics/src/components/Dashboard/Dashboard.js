import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import '../../index.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            name: null,
            open: false,
            logged: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    getState() {
        console.log(this.state);
    }


    render() {
        return (
            <div>

                <AppBar title="Campus App" onLeftIconButtonClick={this.handleToggle} iconElementRight={<RaisedButton label="lOGOUT" secondary={true} />} />
                <Drawer open={this.state.open}>
                    <AppBar onLeftIconButtonClick={this.handleToggle} />
                    <Link to="/studentdashboard/studentdetails"><MenuItem>StudentDetails</MenuItem></Link>
                    <Link to="/studentdashboard/studentjobs"><MenuItem>StudentJobs</MenuItem></Link>
                    <Link to="/studentdashboard/viewcompanies"><MenuItem>View Company</MenuItem></Link>
                    
                </Drawer>

                <Grid>
                    <Row className="centerThatCard">
                        <Col xs={6} md={8}>
                            <Card className="margin-top centerThatCardCol">
                                <CardText>
                                    <p>Taimoor</p>
                                </CardText>
                            </Card>
                        </Col>

                    </Row>
                </Grid>


            </div>
        );
    }
}


export default Dashboard;
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import '../../../index.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

class StudentDetails extends React.Component {

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
                    <Row>
                        <Col sm={6} md={5} mdOffset={4}>
                            <Card className="margin-top">
                                <CardText className="centerThatCardCol">

                                    <TextField hintText="Full Name" type="text" />
                                    <TextField hintText="Education" type="text" />
                                    <TextField hintText="GPA" type="number" />
                                    <TextField hintText="Skills" type="text" />
                                    <TextField hintText="Overview" type="text" />

                                    <RaisedButton label="Update" primary={true} />
                                </CardText>
                            </Card>
                        </Col>

                    </Row>
                </Grid>



            </div>
        );
    }
}


export default StudentDetails;
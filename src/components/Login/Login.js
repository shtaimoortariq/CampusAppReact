import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import '../../index.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            name: null,
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    getState() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <AppBar title="Campus App" onLeftIconButtonClick={this.handleToggle} />
                <Drawer open={this.state.open}>
                    <AppBar onLeftIconButtonClick={this.handleToggle} />
                    <MenuItem>StudentDetails</MenuItem>
                    <MenuItem>StudentJobs</MenuItem>
                </Drawer>




                <Grid>
                    <Col sm={6} md={5} mdOffset={4}>
                        <Card className="margin-top">
                            <CardText className="centerThatCardCol">
                                <TextField hintText="Email" type="email" />
                                <TextField hintText="Password" type="password" /><br />
                                <Row>
                                    <Link to="/studentdashboard"> <RaisedButton label="Login" primary={true} /></Link>
                                    <Link to="/signup"> <RaisedButton label="Sign up" primary={true} /></Link>
                                </Row>
                            </CardText>
                        </Card>

                    </Col>
                </Grid>


            </div>
        );
    }
}


export default Login;
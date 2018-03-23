import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import { changeState } from "../../store/actions/action";
import '../../index.css';

import { connect } from 'react-redux';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            name: null,
            open: false,
            userName: "",
            email: "",
            password: ""
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    getState() {
        // console.log(this.state);
        this.props.changeStateOfStore(this.state.userName);
    }

    changeUserInput(event) {
        console.log(event.target.value);
        this.setState({
            userName: event.target.value
        })

    }

    Login() {
        console.log("Login");

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
                                <TextField hintText="Email" type="email" onChange={event => this.setState({ email: event.target.value })} />
                                <TextField hintText="Password" type="password" onChange={event => this.setState({ password: event.target.value })} /><br />
                                <Row>
                                    <Link to="/studentdashboard"> <RaisedButton label="Login" primary={true} /></Link>
                                    <Link to="/signup"> <RaisedButton label="Sign up" primary={true} /></Link>
                                    <RaisedButton label="state" primary={true} onClick={() => this.Login()} />
                                </Row>
                            </CardText>
                        </Card>

                    </Col>
                </Grid>


                <p>
                    {this.props.userName}
                </p>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return ({
        userName: state.rootReducer.userName
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        changeStateOfStore: (data) => {
            dispatch(changeState(data))
        }
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
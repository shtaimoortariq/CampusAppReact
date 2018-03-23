import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';

import '../../index.css';

import { signupUser } from "../../store/actions/action";

import { connect } from 'react-redux';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            name: null,
            email: '',
            password: '',
            open: false
        };
    }
    handleChange = (event, index, type) => this.setState({ type });


    handleToggle = () => this.setState({ open: !this.state.open });

    getState() {
        console.log(this.state);
    }

    signUp() {
        console.log(this.state);
        let user = {
            type: this.state.type,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        this.props.createNewUser(user)
    }

    render() {
        return (
            <div>
                <AppBar title="Campus App" onLeftIconButtonClick={this.handleToggle} />
                <Drawer open={this.state.open}>
                    <AppBar onLeftIconButtonClick={this.handleToggle} />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem >Close Drawer</MenuItem>
                </Drawer>




                <Grid>
                    <Row>
                        <Col sm={6} md={5} mdOffset={4}>
                            <Card className="margin-top">
                                <CardText className="centerThatCardCol">

                                    <TextField hintText="Name" type="text" onChange={event => this.setState({ name: event.target.value })} />
                                    <TextField hintText="Email" type="email" onChange={event => this.setState({ email: event.target.value })} />
                                    <TextField hintText="Password" type="password" onChange={event => this.setState({ password: event.target.value })} /><br />

                                    <DropDownMenu value={this.state.type} onChange={this.handleChange}>
                                        <MenuItem value={0} label="Student" primaryText="Student" />
                                        <MenuItem value={1} label="Company" primaryText="Company" />
                                    </DropDownMenu>

                                    <RaisedButton label="SignUp" primary={true} onClick={() => this.signUp()} />
                                </CardText>
                            </Card>
                        </Col>

                    </Row>
                </Grid>

                <p>
                    {this.props.globelData.name}
                </p>


            </div>
        );
    }
}



function mapStateToProps(state) {
    return ({
        globelData: state.authReducer
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        createNewUser: (data) => {
            dispatch(signupUser(data))
        }
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
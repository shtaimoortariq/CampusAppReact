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


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            name: null,
            open: false
        };
    }
    handleChange = (event, index, value) => this.setState({ value });


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
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem >Close Drawer</MenuItem>
                </Drawer>




                <Grid>
                    <Row>
                        <Col sm={6} md={5} mdOffset={4}>
                            <Card className="margin-top">
                                <CardText className="centerThatCardCol">

                                    <TextField hintText="Name" type="text" />
                                    <TextField hintText="Email" type="email" />
                                    <TextField hintText="Password" type="password" /><br />

                                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                                        <MenuItem value={0} label="Student" primaryText="Student" />
                                        <MenuItem value={1} label="Company" primaryText="Company" />
                                    </DropDownMenu>

                                    <RaisedButton label="SignUp" primary={true} />
                                </CardText>
                            </Card>
                        </Col>

                    </Row>
                </Grid>


            </div>
        );
    }
}


export default SignUp;
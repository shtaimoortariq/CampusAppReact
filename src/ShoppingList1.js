import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ShoppingList2 from './ShoppingList2';
import './index.css';

class ShoppingList1 extends React.Component {

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
                <AppBar title="Campus App" onClick={this.handleToggle} />
                <Drawer open={this.state.open}>
                    <AppBar onClick={this.handleToggle} />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem >Close Drawer</MenuItem>
                </Drawer>




                <Grid>
                    <Col sm={6} md={5} mdOffset={4}>
                        <Card className="margin-top">
                            <CardText className="centerThatCardCol">
                                <TextField hintText="Email" />
                                <TextField hintText="Password" /><br />
                                <Link to="/signup"> <RaisedButton label="Login" primary={true} /></Link>
                            </CardText>
                        </Card>

                    </Col>
                </Grid>

              
            </div>
        );
    }
}


export default ShoppingList1;
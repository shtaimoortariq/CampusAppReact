import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Grid, Row, Col } from 'react-bootstrap';
import { Card, CardText } from 'material-ui/Card';
import '../../index.css';

class Dashboard extends React.Component {

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
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem >Close Drawer</MenuItem>
                </Drawer>




                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <Card className="margin-top">
                                <CardText className="margin-top centerThatCardCol">
                                    <p>Taimoor</p>
                                </CardText>
                            </Card>
                        </Col>

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
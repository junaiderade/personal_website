import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card,Button} from 'react-bootstrap';
import './Projects.css'
import tiny_turtle from "../../Images/Project_Pics/Tiny_Turtle/Gameplay.png"
import twitter_profile from "../../Images/Twitter_Profile.png"
import cal_calc from "../../Images/Project_Pics/Calorie_Calculator/UI.png"
import yelpcamp from "../../Images/YelpCamp.png"
import you_are_here from "../../Images/You_Are_Here.jpg"
import {Link} from 'react-router-dom'


class Projects extends Component{

    render(){
        return(
            <Container fluid className="projects-parent">
                <br/>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col md = {12} lg = {6}>
                        <br/>
                        <Link to='/projects/tinyturtle' className = 'link-tag' style={{ textDecoration: 'none' }}>
                            <Card className = "hoverable">
                                <Card.Header><h2>Tiny Turtle</h2></Card.Header>
                                <Card.Img className = "card-image" variant="top" src={tiny_turtle} />
                                <Card.Body>
                                    <Card.Title>A Mobile Game with a Purpose</Card.Title>
                                    <Card.Text>Play as a turtle avoiding pollution in this innovative ios/android app!
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>Coming to the App Store and Google Play Store 2022</Card.Footer>
                            </Card>
                        </Link>
                    </Col>

                    <Col md = {12} lg = {6}>
                        <br/>
                        <Link to='/projects/100DaysOfCode' className = 'link-tag' style={{ textDecoration: 'none' }}>
                            <Card className = "hoverable">
                                <Card.Header><h2>100 Days of Code</h2></Card.Header>
                                <Card.Img className = "card-image" variant="top" src={twitter_profile}/>
                                <Card.Body>
                                    <Card.Title>Who Said Social Media is a Waste of Time?</Card.Title>
                                    <Card.Text>
                                    See how I shared my coding progress with the world for 100 days.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>Completed November 2021</Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col md = {12} lg = {6}>
                        <br/>
                        <Link to='/projects/angularcaloriecalculator' className = 'link-tag' style={{ textDecoration: 'none' }}>
                            <Card className = "hoverable">
                                <Card.Header><h2>Angular Calorie Calculator</h2></Card.Header>
                                <Card.Img className = "card-image" variant="top" src={cal_calc} />
                                <Card.Body>
                                    <Card.Title>A Serious Fitness Tool</Card.Title>
                                    <Card.Text>Want to take your fitness planning to the next level? This is what you need.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>Released to the Web August 2019</Card.Footer>
                            </Card>
                        </Link>
                    </Col>

                    <Col md = {12} lg = {6}>
                        <br/>
                        <Link to='/projects/yelpcamp' className = 'link-tag' style={{ textDecoration: 'none' }}>
                            <Card className = "hoverable">
                                <Card.Header><h2>YelpCamp</h2></Card.Header>
                                <Card.Img className = "card-image" variant="top" src={yelpcamp} />
                                <Card.Body>
                                    <Card.Title>Camping + Internet</Card.Title>
                                    <Card.Text>Make an account and tell the world about your favorite places to camp!
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>Released to the Web March 2019</Card.Footer>
                            </Card>
                        </Link>
                    </Col>
                </Row>

                <Row>
                    <Col md = {12} lg = {6}>
                    <br/>
                    <Link to='home' className = 'link-tag' style={{ textDecoration: 'none' }}>
                        <Card className = "hoverable">
                            <Card.Header><h2>Personal Website</h2></Card.Header>
                            <Card.Img className = "card-image" variant="top" src={you_are_here} />
                            <Card.Body>
                                <Card.Title>More than Just a Coder</Card.Title>
                                <Card.Text>The website you are looking at right now
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>Released to the Web November 2021</Card.Footer>
                        </Card>
                    </Link>
                    </Col>
                </Row>
                <br/>
                <br/>
            </Container>
            )
        }
    }
    
    export default Projects;
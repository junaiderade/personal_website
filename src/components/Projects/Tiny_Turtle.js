import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Carousel,Row,Col,Card,ListGroup} from 'react-bootstrap';
import './Tiny_Turtle.css'
// import tiny_turtle_gameplay from "../../Images/Tiny_Turtle.png"
// import tiny_turtle_store from "../../Images/tiny_turtle_store.png"
import tiny_turtle_gameplay from "../../Images/Project_Pics/Tiny_Turtle/Gameplay.png"
import tiny_turtle_store from "../../Images/Project_Pics/Tiny_Turtle/Store.png"
import tiny_turtle_ads from "../../Images/Project_Pics/Tiny_Turtle/Ads.png"

// import tiny_turtle_leaderboards from "../../Images/tiny_turtle_leaderboards.png"
// import tiny_turtle_achievements from "../../Images/tiny_turtle_achievements.png"
// import tiny_turtle_ads from "../../Images/Tiny_Turtle_Ads.png"

class Tiny_Turtle extends Component{

    render(){
        return(
            <Container fluid className="tiny_turtle-parent">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="big_font">Tiny Turtle</h1>
                <br/>
                <Row>
                    <Col md = {12} lg = {9} className="tiny_turtle_col">
                <Carousel className="tiny_turtle_carousel">

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tiny_turtle_gameplay}
                        alt="First slide"
                        />
                        <Carousel.Caption className = "carousel_caption">
                            <h1>Addictive Gameplay</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tiny_turtle_store}
                        alt="Second slide"
                        />

                        <Carousel.Caption className = "carousel_caption">
                        <h1>In-App Purchases</h1>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tiny_turtle_ads}
                        alt="Third slide"
                        />

                        <Carousel.Caption className = "carousel_caption">
                        <h1>Advertisements API</h1>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tiny_turtle_gameplay}
                        alt="Third slide"
                        />

                        <Carousel.Caption className = "carousel_caption">
                        <h1>Achievements with Gamecenter</h1>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={tiny_turtle_gameplay}
                        alt="Third slide"
                        />

                        <Carousel.Caption className = "carousel_caption">
                        <h1>Leaderboards with Gamecenter</h1>
                        </Carousel.Caption>
                    </Carousel.Item>


                </Carousel>
                    </Col>
                </Row>
                <br/>

                <Row className ="tiny_turtle_icons">
                    <Col xs = {4} lg ={3} className = "tiny_turtle_col_2">
                    <h1>Will be available on</h1>
                    <h1>
                    <i className="fab fa-app-store"></i>
                    <i className="fab fa-google-play"></i>
                    </h1>
                    </Col>

                    <Col xs = {4} lg = {3} className = "tiny_turtle_col_2">
                    <h1>Releasing 2022</h1>
                    </Col>

                    <Col xs= {4} lg = {3} style={{color:"white"}}>
                    <h1>Link Not Yet available</h1>
                    </Col>
                </Row>

                <br/>

                <Row>
                    <Col md = {12} lg = {9} className="tiny_turtle_col">
                        <Card className="tiny_turtle_card">
                                        <Card.Body>
                                            <h2 className="tiny_turtle_h2">Description</h2> 
                                                <h5>A free running game where you play as a turtle dodging trash in multiple environments. 
                                                </h5>
                                        </Card.Body>
                                </Card>
                                <br/>
                                <Card className="tiny_turtle_card">
                                        <Card.Body>
                                            <h2 className="tiny_turtle_h2">Features</h2> 
                                                <ul>
                                                    <li><h5>Addictive Gameplay</h5></li>
                                                    <li><h5>In-App Purchasing</h5></li>
                                                    <li><h5>Advertisements</h5></li>
                                                    <li><h5>Achievements</h5></li>
                                                    <li><h5>Leaderboards</h5></li>
                                                </ul>
                                        </Card.Body>
                                </Card>
                                <br/>
                                <Card className="tiny_turtle_card">
                                        <Card.Body>
                                            <h2 className="tiny_turtle_h2">Technical Details</h2> 
                                            <ul>
                                                    <li><h5>C#</h5></li>
                                                    <li><h5>Unity</h5></li>
                                                    <li><h5>Procreate</h5></li>
                                                    <li><h5>Xcode</h5></li>
                                                    <li><h5>Android Studio</h5></li>
                                                </ul>
                                        </Card.Body>
                                </Card>
                        </Col>
                </Row>



                <br/>
            </Container>
            )
        }
    }
    
    export default Tiny_Turtle;
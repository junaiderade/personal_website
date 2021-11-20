import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card,Button} from 'react-bootstrap';
import './Home.css'
import me from "../../Images/Me.png"


class Home extends Component{

    render(){
        return(
            <Container fluid className="parent">
                {/* container fluid is cruicial to the background image */}
                <br/>
                <br/>
                <br/>
                <Row>

                    <Col md = {12} lg = {6} className="left-col" >
                        <br/>
                        <br/>
                        <Image className="pic-me" src={me} roundedCircle />
                        <br/>
                        <br/>
                        <h1>Junaid Mohamed</h1>
                        <h3>
                            <a href="mailto:junaid98m@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a href="https://www.linkedin.com/in/junaid-mohamed-939ba8154/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/junaiderade"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/junaiderade"><i className="fab fa-github"></i></a> 
                            <a href="https://www.instagram.com/junaiderade/"><i className="fab fa-instagram"></i></a>
                        </h3>
                    </Col>
                    <Col md = {12} lg = {6} className="right-col">
                        <br/>
                        <br/>
                        <Card className="text-center home-card">
                                <Card.Body>
                                    <h2>About This Site</h2> 
                                        <h5>They say "People don't believe it till they see it". So, I built this website to show people who I am and what skills I bring to the table. I want to make it easy for people to learn about me and what makes me unique. 
                                        </h5>
                                    <h2>How I Built This</h2>
                                            <h5>Coded in ReactJS Framework</h5>
                                            <h5>Uses React-Bootstrap and Font-Awesome for styling</h5>
                                            <h5>Deployed and hosted on AWS S3</h5>
                                </Card.Body>
                        </Card>
                        <br/>
                        <Card className="text-center home-card">
                                <Card.Body>
                                    <h2>Currently</h2>
                                        <h5>
                                            <i className="fas fa-mobile-alt"></i>Building a mobile game called "Tiny Turtle"
                                        </h5>
                                        <h5>
                                            <i className="fas fa-running"></i>Training for the Publix Atlanta Marathon
                                        </h5>
                                        <h5>
                                            <i className="fas fa-language"></i>Learning how to speak Arabic from Youtube
                                        </h5>
                                        <h5>
                                            <i className="fas fa-gamepad"></i>Playing "The Last of Us" on PS4
                                        </h5>
                                </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                </Row>
            </Container>            
        )
    }
}

export default Home;
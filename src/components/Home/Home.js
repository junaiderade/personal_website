import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card} from 'react-bootstrap';
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
                        <Card>
                                <Card.Body>
                                    <h3 className="home_h3">Welcome! Here's a Little About Me</h3> 
                                    <ul className ="home_ul">
                                            <li>I'm passionate about technology. My purpose is to build and deliver amazing products which push humanity forward.</li>
                                            <li>I graduated from Georgia State University in 2020 with a Bachelor's in Computer Information Systems. Even though I am happy with my degree, I see education as a continuous process. I look forward to pursuing an MBA later in my career! Most recently, I got my Cloud Practitioner certification from AWS.</li>
                                            <li>Outside of work, I like to focus on learning spoken languages, personal fitness, and gaming.</li>
                                        </ul>
                                    <h3 className="home_h3">How I Built This Website</h3>
                                        <ul className ="home_ul">
                                            <li>Coded in ReactJS Framework</li>
                                            <li>Styled with React-Bootstrap and Font-Awesome</li>
                                            <li>Deployed using Netflify</li>
                                            <li>Made with heart</li>
                                        </ul>
                                    <h3 className="home_h3">My Career Interests</h3>
                                        <ul className ="home_ul">
                                            <li>Product Management</li>
                                            <li>Software Development</li>
                                            <li>Cloud Technology</li>
                                        </ul>
                                </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Body>
                                <h3 className="home_h3">Currently</h3>
                                <ul className ="home_ul">
                                    <li><i className="fas fa-mobile-alt"></i>Building a mobile game called "Tiny Turtle"</li>
                                    <li><i className="fas fa-running"></i>Training for the Publix Atlanta Marathon</li>
                                    <li><i className="fas fa-language"></i>Learning how to speak Arabic from Youtube</li>
                                    <li><i className="fas fa-book-open"></i>Reading "Leonardo Da Vinci" by Walter Issacson</li>
                                </ul>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                </Row>
                <br/>
            </Container>            
        )
    }
}

export default Home;
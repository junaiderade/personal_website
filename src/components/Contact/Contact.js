import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card,Button,ListGroup} from 'react-bootstrap';
import './Contact.css'

class Contact extends Component{

    render(){
        return(
            <Container fluid className="contact_parent">
                <br/>
                <br/>
                <br/>
                <h1 className = "contact_h1">Contact Information</h1>
                <br/>

                <ListGroup className="contact_list">
                    <ListGroup.Item>
                    Feel free to get in touch at any of the below.
                    </ListGroup.Item>
                </ListGroup>
                        <h3 className = "contact_h3">
                            <a href="mailto:junaid98m@gmail.com"><i className="fas fa-envelope"></i></a>
                            <a href="https://www.linkedin.com/in/junaid-mohamed-939ba8154/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/junaiderade"><i className="fab fa-twitter"></i></a>
                            <a href="https://github.com/junaiderade"><i className="fab fa-github"></i></a> 
                            <a href="https://www.instagram.com/junaiderade/"><i className="fab fa-instagram"></i></a>
                        </h3>
            </Container>
    )
}
}

export default Contact;
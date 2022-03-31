import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card,Button} from 'react-bootstrap';
import './WorkExperience.css';
import {companies} from './Companies'


class WorkExperience extends Component{

    render(){
        return(
            <Container fluid className="we-parent">
                <br/>
                <br/>
                <br/>
                <h1 className="we_h1">Work Experience</h1>
                <br/>
                <Card className="hundred_card">
                                        <Card.Body>
                                            <h2>Purpose</h2> 
                                                <h5>Look below to see some of the roles I've (Junaid) worked during my career! 
                                                </h5>
                                            <h4><b><i>Email junaid98m@gmail.com for a copy of my resume if interested!</i></b></h4>
                                        </Card.Body>
                                </Card>
                <br/>
                <Row>
                    {
                        companies.map((company,idx)=> {
                            return(
                                <Col xs ={12} md = {6} xl = {4} xxl ={3}>
                                    <Card className="we_card">
                                        <Card.Img className="we_card_image" src={company.image} />
                                        <Card.Body className = "we_card_text">
                                            <Card.Title>{company.position + " " + company.time_period}</Card.Title>
                                            <Card.Text>
                                            {company.desc}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <br/>
                                </Col>
                            )
                        }
                        )
                    }
                
                </Row>
                <br/>
                <br/>
            </Container>
            )
        }
    }
    
export default WorkExperience;
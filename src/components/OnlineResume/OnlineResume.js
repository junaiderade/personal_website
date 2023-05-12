import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card,Button} from 'react-bootstrap';
import './WorkExperience.css';
import {companies} from './Companies'
import {schools} from './Schools'



class WorkExperience extends Component{

    render(){
        return(
            <Container fluid className="we-parent">
                <br/>
                <br/>
                <br/>
                <h1 className="we_h1">Online Resume</h1>
                <br/>
                <Card className="hundred_card">
                    <Card.Body>
                        <h2>Education</h2> 
                    </Card.Body>
                </Card>
                <br/>
                <Row>
                    {
                        schools.map((company,idx)=> {
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
                <Card className="hundred_card">
                    <Card.Body>
                        <h2>Skills</h2> 
                    </Card.Body>
                </Card>
                <br/>
                <Card className="hundred_card">
                    <Card.Body>
                        <Card.Title><b>Programming Domains:</b> Full-stack Web Development, Data Science, DevOps</Card.Title>
                        <Card.Title><b>Programming Languages:</b> Python, JavaScript, C#</Card.Title>
                        <Card.Title><b>Data Science Python Libraries:</b> spaCy, NLTK, Gensim, NumPy, Pandas, OpenPyXL, Selenium</Card.Title>
                        <Card.Title><b>Full-Stack:</b> ReactJS, React Native, NodeJS, Express, Docker</Card.Title>
                        <Card.Title><b>AWS:</b> EC2, RDS, Elastic Beanstalk, Lambda, Cognito, API Gateway, ECS, Fargate, DynamoDB, S3 </Card.Title>
                    </Card.Body>
                </Card>

                <br/>

                <Card className="hundred_card">
                    <Card.Body>
                        <h2>Work Experience</h2> 
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
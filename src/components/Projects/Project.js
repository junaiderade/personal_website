import React, {Component} from 'react';
import { Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';
import './Project.css'
import {project_items} from './Project_items.js'


class Project extends Component{

    //props were passed in link of this component from app.js

    render(){
        return(
            <Container fluid className = 'proj_parent'
            style={{backgroundImage: `url(${project_items[this.props.current].background})`}}
            >
        
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 className = "proj_h1">{project_items[this.props.current].name}</h1>

            <br/>

            <Row>
                <Col md = {12} lg = {9} className="proj_col">

                <Card className="proj_card">
                                        <Card.Body>
                                            <h2>Description</h2> 
                                                <h5>{project_items[this.props.current].description}
                                                </h5>
                                        </Card.Body>
                        </Card>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col md = {12} lg = {9} className="proj_col">
                    <Carousel className="proj_carousel">
                    {
                    project_items[this.props.current].carousel.map((x,idx) => {
                        return(
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={x.image}
                            alt="First slide"
                            />
                            <Carousel.Caption className = "carousel_caption">
                                <h1>{x.caption}</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })
                    }
                    </Carousel>
                </Col>
            </Row>

            <br/>

            <Row className ="proj_icons">
                <Col xs = {4} lg ={3} className = "proj_col_2">
                    <h2>{project_items[this.props.current].released ? "Available on" : "Will be available"}</h2>
                    <h2>
                    {
                        project_items[this.props.current].icons.map((x,idx) => {
                            return(
                                <i className={x}></i>
                            )
                        })
                    }
                    </h2>
                </Col>

                <Col xs = {4} lg = {3} className = "proj_col_2">
                    <h2>{project_items[this.props.current].release_notes}</h2>
                </Col>

                <Col xs= {4} lg = {3}>
                    <Button className = {project_items[this.props.current].released ? "" : "disabled"} 
                    variant="primary"
                    href={project_items[this.props.current].link}>
                        <h2>{project_items[this.props.current].released ? "Go to App" : "Link Not Yet Available"}</h2>
                    </Button>
                </Col>
            </Row>

            <br/>

            <Row>
                <Col md = {12} lg = {9} className="proj_col">

                    <Card className="proj_card">
                            <Card.Body>
                                <h2>Features</h2> 
                                    <ul>
                                        {
                                            project_items[this.props.current].features.map((x,idx) => {
                                                return(
                                                    <li><h5>{x}</h5></li>
                                                )
                                            })
                                        }
                                    </ul>
                            </Card.Body>
                    </Card>

                    <br/>

                    <Card className="proj_card">
                            <Card.Body>
                                <h2>Technical Details</h2> 
                                    <ul>
                                        {
                                            project_items[this.props.current].technical.map((x,idx) => {
                                                return(
                                                    <li><h5>{x}</h5></li>
                                                )
                                            })
                                        }
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
    
    export default Project;
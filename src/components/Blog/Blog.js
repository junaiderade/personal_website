import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image,Card,Button,ListGroup} from 'react-bootstrap';
import './Blog.css';
import {Link} from 'react-router-dom';
import {articles} from "./Articles.js";

class Blog extends Component{
    render(){
        return(
            <Container fluid className="blog_parent">
                <br/>
                <br/>
                <br/>
                <h1 className = "blog_h1">Blog</h1>
                <br/>
                <ListGroup className="blog_list">
                    <ListGroup.Item>
                    Any articles I write will be featured here. Hoping the articles help you get to know me better!
                    </ListGroup.Item>
                </ListGroup>
                <br/>
                <Row>
                    {
                        articles.map((x,idx) =>{
                            return(
                                <Col md = {12} lg = {6}>
                                <br/>
                                    <Card className = "hoverable">
                                        <Card.Header><h2>{x.title}</h2></Card.Header>
                                        <Card.Img className = "card-image" variant="top" src={x.image} />
                                        <Card.Body>
                                            <Card.Text>{x.desc}</Card.Text>
                                            <Button href={x.link} variant="primary">Go to Article</Button>
                                        </Card.Body>
                                        <Card.Footer>{x.release_date}</Card.Footer>
                                    </Card>
                            </Col>
                            )
                        })
                    }
                </Row>
                <br/>
                <br/>

            </Container>
        )
    }
}

export default Blog;
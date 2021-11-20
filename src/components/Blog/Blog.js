import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Image,Card,Button,ListGroup} from 'react-bootstrap';
import './Blog.css'

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
            </Container>
        )
    }
}

export default Blog;
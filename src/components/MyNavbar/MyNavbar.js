import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Container,Nav} from 'react-bootstrap';
import '../../App.css'
import { Link } from 'react-router-dom';
import './MyNavbar.css'



class MyNavbar extends Component{


    render(){
        return(
            <div>
                <Navbar fixed="top" className="navbar-style" bg="light" expand="lg">
                    <Container>
                    <Link className = "nav_brand" to="/home">Junebug Developer</Link>

                        {/* <Navbar.Brand className ="navbar-brand-style" href="/home">Junaid Mohamed</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className = "nav_link" to="/home">Home</Link>
                            <Link className = "nav_link" to="/projects">Projects</Link>
                            <Link className = "nav_link" to="/workexperience">Work Experience</Link>
                            <Link className = "nav_link" to="/blog">Blog</Link>
                            <Link className = "nav_link" to="/contact">Contact</Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>              
        )
    }
}

export default MyNavbar;
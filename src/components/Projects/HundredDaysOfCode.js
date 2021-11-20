import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './HundredDaysOfCode.css'
import MyDropdown from './MyDropdown';
import {Container,Row,Col,Image,Card,Button,Dropdown,InputGroup,FormControl} from 'react-bootstrap';



class Hundred_Days_Of_Code extends Component{
    
   
//     //Working API code that you are choosing not to use
//     componentDidMount() {
//         fetch(
// "https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 console.log(json);
//             })
            
//     }

componentDidMount() {
    console.log("mounted");
}

componentDidUpdate(){
    console.log("updated");
}


    render(){
        return(
            <Container fluid className="hundred_parent">
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="hundred_big_font">100 Days Of Code Challenge</h1>
            <br/>
            <Card className="tiny_turtle_card">
                <Card.Body>
                    <h2 className="tiny_turtle_h2">Description</h2> 
                        <h5>The #100DaysOfCode Challenge is a challenge on twitter where users share their coding for the day with the world for 100 days! Very few make it to the end!
                        </h5>
                </Card.Body>
            </Card>
            <br/>
            <MyDropdown></MyDropdown>
            <br/>
            </Container>
            )
        }
    }
    
    export default Hundred_Days_Of_Code;
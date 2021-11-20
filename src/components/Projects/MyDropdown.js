import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hundred_tweets} from './HundredTweets';
import {Row,Col,Dropdown,DropdownButton} from 'react-bootstrap';
import TweetEmbed from 'react-tweet-embed'


function MyDropdown() {

  const [value,setValue]=useState(80);

  const handleSelect=(e)=>{
    setValue(parseInt(e));
  }

  useEffect(() => {//works similar to componentDidMount and componentDidUpdate
    // Update the document title using the browser API
    console.log("loaded");
  });

  return (
    <div>
      
      <DropdownButton
      variant = "light"
      className = "drop"
      title={"Days " + (value + 1) + " to " + (value+20)}
      id="dropdown"
      onSelect={handleSelect}
        >
              <Dropdown.Item eventKey="80">Days 81 to 100</Dropdown.Item>
              <Dropdown.Item eventKey="60">Days 61 to 80</Dropdown.Item>
              <Dropdown.Item eventKey="40">Days 41 to 60</Dropdown.Item>
              <Dropdown.Item eventKey="20">Days 21 to 40</Dropdown.Item>
              <Dropdown.Item eventKey="0">Days 1 to 20</Dropdown.Item>
      </DropdownButton>
      <br/>
      <Row>
            {
            hundred_tweets.slice(0).reverse().map((num,idx) => { //map calls the provided function on every item in the array
              if(idx>=value && idx<=(value+20)){
              return(
                        <Col key = {idx} xs ={12} md = {6} xl = {4} xxl ={3}>
                            <TweetEmbed  className="embed_tweet" id={num}/>
                        </Col>
                    )
              }
            })
            }
            </Row>
      </div>
  );
}

export default MyDropdown;
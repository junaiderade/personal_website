import React, {Component} from 'react';
import { Button } from './Button';
import {MenuItems} from './MenuItems';
import'./Navbar.css'
class Navbar extends Component{

    state = { 
        //this is pretty much a variable to represent class variables in React
        clicked: false
    }
    
    handleClick = () => { //you NEEDED to make this an arrow function
        this.setState({ clicked: !this.state.clicked})
        //whenever you click on it, it swithces values
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    Junaid Mohamed
                    <i className="fas fa-space-shuttle"></i>
                </h1>

                <div className="menu-icon" onClick={this.handleClick}> {/* handleclick is a function tells you to set the state to a specific value */}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> {/* switch what the icon is based on state, this is for hamburger icon menu */}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map(
                        (item,index) => { //map calls the provided function on every item in the array
                            return(
                                <li key = {index}>
                                    <a className ={item.cName} href ={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                    }
                    )
                    }
                </ul>
                <Button>Sign up</Button>
            </nav>
        )
    }
}

export default Navbar;
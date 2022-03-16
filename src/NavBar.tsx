import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul id="navigation" className="Navigation">

                        <Link to="/" className="Link" >Home</Link>
                        <br></br>
                        <Link to="/about" className="Link" >About</Link>

                    </ul>
                </nav>
            </div>
        );


    }
}


export default NavBar;

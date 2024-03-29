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
                        <Link to="/contact" className="Link" >Contact</Link>
                        <br></br>
                        <Link to="/links" className="Link" >Links</Link>
                        <br></br>
                        <Link to="/programming" className="Link" >Programming</Link>
                        <br></br>
                        <Link to="/pontifex" className="Link" >Pontifex</Link>

                    </ul>
                </nav>
            </div>
        );


    }
}


export default NavBar;

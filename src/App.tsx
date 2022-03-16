import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Links from './Links';
import Home from './Home';
import NavBar from './NavBar';
import Contact from './Contact';

class App extends React.Component {
    render() {
        return (
            <div className="Index">
                <div>
                    <NavBar />
                </div>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/links" element={<Links />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;

import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Contact from './Contact';
import Pontifex from './Pontifex/Pontifex';
import PontifexTos from './Pontifex/tos';
import PontifexPrivacy from './Pontifex/privacy';

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
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pontifex" element={<Pontifex />} />
                        <Route path="/pontifex/tos" element={<PontifexTos />} />
                        <Route path="/pontifex/privacy" element={<PontifexPrivacy />} />
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;

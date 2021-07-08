import React from 'react';
import {Route, Link} from "react-router-dom";
import {Home, About, Contact} from '../components';
import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="App">
            <nav className="nav-header">
                <h3>React Router Mini</h3>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </div>
    );
};

export default Navigation;

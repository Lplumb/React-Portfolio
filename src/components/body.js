import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Info from './info'
import Portfolio from './portfolio'
import Contact from './contact'

export default class Body extends Component {
    render() {
        return (
            <div>
                <Router>
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Navbar.Brand href="#home">Lucas Plumb</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto p-3">
                    <button type="button" className="btn btn-info"><Link className="paddingLink" to="/">About Me</Link></button>
                    <button type="button" className="btn btn-info"><Link className="paddingLink" to="/portfolio">Portfolio</Link></button>
                    <button type="button" className="btn btn-info"><Link className="paddingLink" to="/contact">Contact</Link></button>
                    <button type="button" className="btn btn-info"><a href="https://docs.google.com/document/d/1NArDyXPUFbMTw3-uWBkF65S-eDFC0H0qWyF9Uh197V4/edit?usp=sharing" className="paddingLink" >Resume</a></button>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Switch>
                <Route exact path="/"><Info /></Route>
                <Route path="/portfolio"><Portfolio /></Route>
                <Route path="/contact"><Contact /></Route>
                </Switch>
                </Router>


            </div>
        )
    }
}
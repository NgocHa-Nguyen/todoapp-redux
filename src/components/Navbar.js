import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "bootstrap/dist/css/bootstrap.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Logo from "../public/images/logo.png";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import "../public/css/Navbar.css"
import TodoList from './TodoList';
import Stats from './Stats';


class Navbar extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route>
                        <Link to="/">
                            <img src={Logo} alt="img-logo" className="img-logo"></img>
                        </Link>
                    </Route>
                    <SideNav>
                        <SideNav.Toggle />
                        <SideNav.Nav defaultSelected="home">
                            <NavItem eventKey="home">
                                <NavIcon>
                                    <i
                                        className="fa fa-fw fa-home"
                                        style={{ fontSize: "1.75em" }}
                                    />
                                </NavIcon>
                                    <NavText>
                                        <Link to="/todo">Todo-List</Link>
                                    </NavText>
                            </NavItem>
                            <NavItem eventKey="charts">
                                <NavIcon>
                                    <i
                                        className="fa fa-fw fa-line-chart"
                                        style={{ fontSize: "1.75em" }}
                                    />
                                </NavIcon>
                                <NavText>
                                    <Link to="/statistics">Statistics</Link>
                                </NavText>
                            </NavItem>
                        </SideNav.Nav>
                    </SideNav>
                    <Route path="/todo">
                        <TodoList></TodoList>
                    </Route>
                    <Route path="/statistics">
                        <Stats></Stats>
                    </Route>
                </Router>
            </div>
        );
    }
}

export default Navbar;
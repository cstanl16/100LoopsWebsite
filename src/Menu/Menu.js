import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const MainNav = () => (
    <Nav className="Nav">
        <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        className="Nav-Link"
        activeClassName="Nav-Link-active"
        >
        Home
        </Nav.Link>
        
        <div class="dropdown">
            <button class="dropbtn">Visual Analysis</button>

            <div class="dropdown-content">
                <Nav.Link
                as={RouterNavLink}
                to="/dance"
                exact
                className="Nav-Link"
                activeClassName="Nav-Link-active"
                >
                DanceVsPop
                </Nav.Link>

                <Nav.Link
                as={RouterNavLink}
                to="/tempo"
                exact
                className="Nav-Link"
                activeClassName="Nav-Link-active"
                >
                TempoVsPop
                </Nav.Link>

                <Nav.Link
                as={RouterNavLink}
                to="/loudness"
                exact
                className="Nav-Link"
                activeClassName="Nav-Link-active"
                >
                LoudnessVsPop
                </Nav.Link>

                <Nav.Link
                as={RouterNavLink}
                to="/acousticness"
                exact
                className="Nav-Link"
                activeClassName="Nav-Link-active"
                >
                AcousticnessVsPop
                </Nav.Link>

                <Nav.Link
                as={RouterNavLink}
                to="/key"
                exact
                className="Nav-Link"
                activeClassName="Nav-Link-active"
                >
                KeyVsPop
                </Nav.Link>
            </div>
        </div>
        

        <Nav.Link
        as={RouterNavLink}
        to="/advanced"
        exact
        className="Nav-Link"
        activeClassName="Nav-Link-active"
        >
        Advanced Analytics
        </Nav.Link>

  </Nav>
);


const Menu = () => {
    return (
        <div className="MenuContainer">
            <MainNav />
        </div>
    );
};

export default Menu;
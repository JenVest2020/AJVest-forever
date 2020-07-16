import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const BGimage = require('./images/LoveCrossInfinity.png');
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


    return (
        <div>
            <Navbar style={{ backgroundImage: 'linear-gradient(green, white, blue)', textAlign: 'center' }} light>
                <img style={{ width: '3%' }} src={BGimage} alt='' />
                <NavbarBrand href="/" className="mr-auto">
                    <h1>
                        Allen and Jenni Vest Through the Years
            </h1>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to='/Young'>
                                <NavLink style={{ color: 'black' }} to="/Young">Our Youth</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/Reconnecting'>
                                <NavLink style={{ color: 'black' }} to="/Reconnecting">ReConnecting</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Badge color='dark'>
                                <Link to='/'>
                                    <NavLink className='text-white' to="/">Home
                            </NavLink>
                                </Link>
                            </Badge>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default Navigation;
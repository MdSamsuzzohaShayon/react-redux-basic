import React from 'react';
import { Menu } from 'semantic-ui-react';

// IT DIDN'T REFRESH THE PAGE OF REQUEST TO SERVER  
import {Link, NavLink} from 'react-router-dom'; // this prevent the default action of request to server
// NAVLINK WORK AS SAME WITH LINK BUT IT ADD AN EXTRA CLASS OF ACTIVE
//  INSPECT ELEMENT TO SEE THAT



const Navbar = () => {
    return (
        <Menu inverted color="green">
            <Menu.Item name='home' ><Link to='/'>Home</Link></Menu.Item>
            <Menu.Item name='about' ><NavLink to='/about'>About</NavLink></Menu.Item>
            <Menu.Item name='contract'><NavLink to='/contract'>Contract</NavLink></Menu.Item>
            <br/><br/>
        </Menu>
    )
}

export default Navbar;

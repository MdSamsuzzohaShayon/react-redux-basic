import React from 'react';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
    return (
        <Menu inverted color="green">
            <Menu.Item href="/" name='home' content='Home' ></Menu.Item>
            <Menu.Item href="/about" name='about' content='About' ></Menu.Item>
            <Menu.Item href="/contract" name='contract' content='Contract' ></Menu.Item>
            <br/><br/>
        </Menu>
    )
}

export default Navbar;

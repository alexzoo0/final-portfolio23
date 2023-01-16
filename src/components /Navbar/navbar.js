import React from "react";
import {  AppBar, Avatar, Button, Container } from '@material-ui/core';
import useStyles from './style.js';
import { Link } from "react-router-dom";

const Navbar = () => {
    const classes = useStyles();

    

    return (
        <Container className={classes.container}>
            <AppBar position='fixed' fullwidth style={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
            <div className={classes.flex}>
                <Avatar className={classes.avatar}>AV</Avatar>
                <Link to='/'><div className='navlogo'></div></Link>
                <Button href="#contact" className={classes.button}>Hire Me</Button>
            </div>
            </AppBar>
        </Container>
    )
}

export default Navbar;
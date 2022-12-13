import React from "react";
import {  AppBar, Avatar, Button, Container } from '@material-ui/core';
import useStyles from './style.js';

const Navbar = () => {
    const classes = useStyles();

    

    return (
        <Container className={classes.container}>
            <AppBar position='fixed' fullwidth style={{ backgroundColor: 'transparent', boxShadow: 'none'}}>
            <div className={classes.flex}>
                <Avatar className={classes.avatar}>AV</Avatar>
                <div className='navlogo'></div>
                <Button className={classes.button}>Hire Me</Button>
            </div>
            </AppBar>
        </Container>
    )
}

export default Navbar;
import React from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';

import useStyles from './style.js';

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerCon}>
            <p className={classes.footerin}>Alexisvelasquez15@gmail.com</p>
            <p className={classes.footerin}>@ 2021 - 2024 alexzoo0 Web Design. All rights reserved.</p>
            </div>
            <div className={classes.buttonsF}>
                <IconButton class='button' target="_blank" href='https://www.linkedin.com/in/alexis-velasquez-04670b218?trk=people-guest_people_se"arch-card' >
                    <LinkedInIcon className='link' fontSize='large' /> 
                </IconButton>
                <IconButton class='button' target="_blank" href='https://github.com/alexzoo0'>
                    <GitHubIcon className='link' fontSize='large' />
                </IconButton>
                <IconButton class='button' target='_blank' href='https://www.instagram.com/_alexzoooo_/'>
                    <InstagramIcon className='link' fontSize='large' />
                </IconButton>
                </div>
            <div className={classes.footerCon2}>
            <p className={classes.footerin}>Alexis Velasquez</p>
            <p className={classes.footerin}>You may also contact me here</p>
            </div>
        </footer>
    )
}

export default Footer;
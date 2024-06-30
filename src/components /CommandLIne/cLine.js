import React from "react";
import Navbar from "../Navbar/navbar.js";
import Footer from "../Footer/footer.js"
import { useCopyToClipboard } from 'usehooks-ts';

import { Container, Grid } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';


import { Box } from '@material-ui/core';
import useStyles from './style.js';

const CLine = () => {

    const [ copy ] = useCopyToClipboard()
    const copyLinks = 'www.alexoo0.com';
    const classes = useStyles();


    function dropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
      };
    
      window.onclick = function(event) {
        if (!event.target.matches('.dropdtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; 1 < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      };

    return (
        <Box>
            <Navbar />
                <div className="layer4">
                <Container>
                    <Grid className='intro spacer'>
                        <div className='title'>
                            <div className="Talexisbg"></div>
                            <p class='name titleP'>Alexis Velasquez</p>
                            <h2 style={{color: '#fff37e'}}>Command line Projects</h2>
                        </div>
                        <div class='Buttons'>
                            <IconButton class='button' target="_blank" href='https://www.linkedin.com/in/alexis-velasquez-04670b218?trk=people-guest_people_se"arch-card' >
                                <LinkedInIcon className='link' fontSize='large' /> 
                            </IconButton>
                            <IconButton class='button' target="_blank" href='https://github.com/alexzoo0'>
                                <GitHubIcon className='link' fontSize='large' />
                            </IconButton>
                            <IconButton class='button' target='_blank' href='https://www.instagram.com/_alexzoooo_/'>
                                <InstagramIcon className='link' fontSize='large' />
                            </IconButton>
                            <IconButton className='dropdown' target='_blank' onClick={dropdown} >
                                <ShareIcon className='link dropbtn' fontSize='large' />
                                <div id="myDropdown" className="dropdown-content">
                                <input className='copy' type='text' id='link' value='www.alexoo0.com'/>
                                <button onClick={() => {
                                copy(copyLinks)
                                }} className="copyLink">Copy Link<LinkIcon className='icon'/>
                                </button>
                                <a className="email" href="mailto:someonespecial@example.com?subject=Checkout Alexis's Portfolio&body=Name: Alexis Velasquez %0D%0A Portfolio: www.alexzoo0.com">Email<EmailIcon className='icon' /></a>
                                <a className="message" href="#contact">Message <SendIcon className='icon'/></a>
                                </div>
                            </IconButton>
                        </div>
                    </Grid>
                </Container>
            </div>
            <div className={classes.content}>
                <Container>
                    <div className={classes.box}>
                        <div className={classes.title}>
                        <h1>Readme Generator</h1>
                        <IconButton target="_blank" href='https://github.com/alexzoo0'>
                            <GitHubIcon fontSize='large' className={classes.button} />
                        </IconButton>
                        </div>
                        <p>This simple project helped me understand how node.js works. The project works simply by using an index.js file which is where node will source the code to start hangman. i further started to understand using package.json files and how to add things like, version, name, description, main, and license info for the project which comes in handy in the future. After creating my index file i also went and installed some dependencies for this project like nodemon. Nodemon is a great dependency i use for most of my projects, in simple terms it updates your project without having to refresh your browser page. Finally for this project make sure you have node installed in your pc. </p>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.title}>
                        <h1>SQL Employee Tracker</h1>
                        <IconButton target="_blank" href='https://github.com/alexzoo0'>
                            <GitHubIcon fontSize='large' className={classes.button} />
                        </IconButton>
                        </div>
                        <p>This simple project helped me understand how node.js works. The project works simply by using an index.js file which is where node will source the code to start hangman. i further started to understand using package.json files and how to add things like, version, name, description, main, and license info for the project which comes in handy in the future. After creating my index file i also went and installed some dependencies for this project like nodemon. Nodemon is a great dependency i use for most of my projects, in simple terms it updates your project without having to refresh your browser page. Finally for this project make sure you have node installed in your pc. </p>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.title}>
                        <h1>Hangman</h1>
                        <IconButton target="_blank" href='https://github.com/alexzoo0'>
                            <GitHubIcon fontSize='large' className={classes.button} />
                        </IconButton>
                        </div>
                        <p>This simple project helped me understand how node.js works. The project works simply by using an index.js file which is where node will source the code to start hangman. i further started to understand using package.json files and how to add things like, version, name, description, main, and license info for the project which comes in handy in the future. After creating my index file i also went and installed some dependencies for this project like nodemon. Nodemon is a great dependency i use for most of my projects, in simple terms it updates your project without having to refresh your browser page. Finally for this project make sure you have node installed in your pc. </p>
                    </div>
                </Container>
            </div>
            <div className={classes.code}>
                <div className={classes.bg}>
                    &#123;!DOCTYPE html &#125;
                    <br />
                    html&#61;
                    &#091;
                    &#093;
                    &#x27;
                    import readline from 'readline';
                    <br />
                    let choosenWord = '';
                    <br />
                    let Marray = [];
                    <br />
                    let failCount = 0;
                    <br />
                    const categories = <span style={{color: '#00ced3'}}>&#123;</span>
                    <br />
                        clubs&#58; ['Manchester United', 'Barcelona', 'Real Madrid', 'Bayern Munich', 
                        'Manchester City', 'Arsenal', 'Chelsea', 'Liverpool', 'Juventus', 'Tottenham Hotspur',
                        'Borussia Dortmund', 'Atletico Madrid', 'Inter Milan', 'West Ham United', 'Roma',
                        'Napoli', 'Everton', 'Newcastle United'],
                        <br />
                        places: ['New York', 'Los Angeles', 'California', 'Chicago', 'Illinois',  
                        'Houston', 'Texas', 'Philadelphia', 'Pennsylvania', 'Phoenix', 'Arizona', 'San Antonio', 
                        'San Diego', 'Dallas', 'San Jose', 'Austin', 'Texas', 'Jacksonville', 'Florida', 
                        'San Francisco', 'Indianapolis', 'Indiana', 'Massachusetts', 'Mississippi'],
                        <br />
                        movies: ["The Godfather", "The Shawshank Redemption", "Schindler's List",
                        "Raging Bull", "Casablanca", "Citizen Kane", "Gone With The Wind", "The Wizard Of Oz",
                        "Inception"]
                        <br />
                        <span style={{color: '#00ced3'}}>&#125;</span>
                    <br />

                </div>
            </div>
            <div className='layer2'></div>
            <Footer />
        </Box>
    )
}

export default CLine;
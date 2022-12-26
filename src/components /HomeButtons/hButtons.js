import React from "react";
import { useCopyToClipboard } from 'usehooks-ts';

import { Container, Grid } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import { IconButton } from '@mui/material';

const HomeButtons = () => {

    const [value, copy] = useCopyToClipboard()
    const copyLinks = 'www.alexoo0.com';


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
    <div className="layer4">
        <Container>
            <Grid className='intro spacer'>
                <div className='title'>
                    <div className="Talexisbg"></div>
                    <p class='name titleP'>Alexis Velasquez</p>
                    <h1>Full Stack Developer</h1>
                    <p className='titleP'>Now you've check off ui/ux designs and its time to program.<br/>Don't know where to start? let me be your guide on how to properly deply a beautiful custom website</p>
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
                        <a href="#about">Email<EmailIcon className='icon' /></a>
                        <a href="#contact">Message</a>
                        </div>
                    </IconButton>
                </div>
            </Grid>
        </Container>
    </div>
    )
}

export default HomeButtons;
import React from "react";
import Navbar from "../Navbar/navbar.js";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import Mad from '../../img/madness-logo.png';
import Madmoblie from '../../img/FIAT-SAMPLE-3-MOBILE.png';
import Slider from "../Featured/Slider/Slider.js";
import Footer from "../Footer/footer.js"

import { Container, Grid } from '@material-ui/core';



import { Box } from '@material-ui/core';
import useStyles from './style.js';

const CLine = () => {
    
    const classes = useStyles();

    function dropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
      };
    
    function copyalexzo() {
      var copyText = document.getElementById("link");

      copyText.select();

      navigator.clipboard.writeText(copyText.value);

      alert("Copied the text:" + copyText.value);
    }


    return (
        <Box>
            <Navbar />
                <div className="layer4w">
                <Container>
                    <Grid className='intro spacer'>
                        <div className='title'>
                            <div className="Talexisbg"></div>
                            <p class='name titleP'>Alexis Velasquez</p>
                            <h2 style={{color: '#fff37e'}}>Web Development</h2>
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
                        <button onClick={copyalexzo} className="copyLink">Copy Link<LinkIcon className='icon'/>
                        </button>
                        <a className="email" href="mailto:someonespecial@example.com?subject=Checkout Alexis's Portfolio&body=Name: Alexis Velasquez %0D%0A Portfolio: www.alexzoo0.com">Email<EmailIcon className='icon' /></a>
                        <a className="message" href="#contact">Message <SendIcon className='icon'/></a>
                        </div>
                    </IconButton>
                        </div>
                    </Grid>
                </Container>
            </div>
            <Grid>
            <div className='graphicCard'>
                <div className='graphicTitle'><p>MADNESS AUTOWORKS</p></div>
                    <div className='graphicList'>
                        <div className='Gtitle'>
                            <h3>www.madnessauto.com</h3>
                            <p>I decided to take it a step further and <br/>decided to combine illustartion with <br/>imagery.<br/> <br/>The Process<br/>
                            - Research (competitors, clients)<br/>
                            - Target demographic (age, gender) <br/>
                            - Brand identity (logo, colors, typography) <br/>
                            - Color theory (grayscale, color scheme) <br/><br/>

                            I start on my three sample sketches <br/> based on the process above. <br/><br/>

                            The process: 2hrs <br/>
                            3 samples + mobile versions: 9hrs  </p>
                            <div>
                            <h3>Icons Used</h3>
                        </div>
                        </div>
                        <div className='Glogo'>
                        <img src={Madmoblie} alt='fiat'/>
                        </div>
                    </div>
                </div>
                <div className='productCard'>
                <Slider />
            </div>
            <div className='bgShape'>
            <img src={Mad} alt='fiat' width='500px' height='100px'/>    
            </div>
        </Grid>
        <Grid>
            <div className='graphicCard2'>
                <div className='graphicTitle'><p>MADNESS AUTOWORKS</p></div>
                    <div className='graphicList'>
                        <div className='Gtitle'>
                            <h3>MADNESS AUTOWORKS</h3>
                            <p>I decided to take it a step further and <br/>decided to combine illustartion with <br/>imagery.<br/> <br/>The Process<br/>
                            - Research (competitors, clients)<br/>
                            - Target demographic (age, gender) <br/>
                            - Brand identity (logo, colors, typography) <br/>
                            - Color theory (grayscale, color scheme) <br/><br/>

                            I start on my three sample sketches <br/> based on the process above. <br/><br/>

                            The process: 2hrs <br/>
                            3 samples + mobile versions: 9hrs  </p>
                        </div>
                        <div className='flogo'>
                        <img src={Mad} alt='fiat'/>
                        </div>
                    </div>
                </div>
                <div className='GraphicCardLeft'>
                    <Slider />
                </div>
                <div className='GbgShape'>
                    <img src={Mad} alt='fiat' width='500px' height='100px'/>    
                </div>
             </Grid>
            <div className='layer2'></div>
            <Footer className={classes.footer} />
        </Box>
    )
}

export default CLine;
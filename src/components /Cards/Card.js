import React from 'react';
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Button } from '@mui/material';
import { Grid } from '@material-ui/core';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import SendIcon from '@mui/icons-material/Send';
import useStyles from './style.js';
import { Link } from 'react-router-dom';



const Card1 = () => {
    const classes = useStyles()

    function dropdown() {
        document.getElementById("myDropdown3").classList.toggle("show");
      };

    function copyalexzo() {
        var copyText = document.getElementById("link");
  
        copyText.select();
  
        navigator.clipboard.writeText(copyText.value);
  
        alert("Copied the text:" + copyText.value);
      }

    return(
        <Grid>
            <Card style={{ background: 'linear-gradient(transparent, #E4584B)', borderRadius: '20px', boxShadow: '5px 10px 30px #263238', marginTop: '100px', width: '300px'}} sx={{ maxWidth: 345 }}>
            <Link style={{textDecoration: 'none'}} to='/commandLine' activestyle='true'>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                height="200"
                alt='Portfolio'
                />
                <CardContent>
                    <p className={classes.typo} variant='h5'>
                        Web development
                    </p>
                </CardContent>
                </CardActionArea>
                </Link>
                <CardActions >
                    <Button class={classes.cardButton} onClick={dropdown} size='small'>Share</Button>
                    <div id="myDropdown3" className="dropdown-content">
                        <input className='copy' type='text' id='link' value='www.alexoo0.com'/><br/>
                        <button onClick={copyalexzo} className="copyLink2">Copy Link<LinkIcon className='icon'/>
                        </button>
                        <a className="email" href="mailto:someonespecial@example.com?subject=Checkout Alexis's Portfolio&body=Name: Alexis Velasquez %0D%0A Portfolio: www.alexzoo0.com">Email<EmailIcon className='icon' /></a>
                        <a className="message" href="#contact">Message <SendIcon className='icon'/></a>
                        </div>
                        <Link style={{textDecoration: 'none'}} to='/commandLine' activestyle='true'>
                    <Button class={classes.cardButton} size='small'>See More</Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
        
    )

}

export default Card1;
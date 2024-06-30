import React from 'react';
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Button } from '@mui/material';
import { Grid } from '@material-ui/core';
import useStyles from './style.js';
import { Link } from 'react-router-dom';



const Card1 = () => {
    const classes = useStyles()

    return(
        <Link style={{textDecoration: 'none'}} to='/commandLine' activestyle>
        <Grid>
            <Card style={{ background: 'linear-gradient(transparent, #E4584B)', borderRadius: '20px', boxShadow: '5px 10px 30px #263238', marginTop: '100px', width: '300px'}} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                height="200"
                alt='Portfolio'
                />
                <CardContent>
                    <p className={classes.typo} variant='h5'>
                        Portfolio Website AV
                    </p>
                </CardContent>
                <CardActions >
                    <Button class={classes.cardButton} size='small'>Share</Button>
                    <Button class={classes.cardButton} size='small'>See More</Button>
                </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
        </Link>
        
    )

}

export default Card1;
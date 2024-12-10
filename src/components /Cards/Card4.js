import React from 'react';
import { Card, CardActions, CardContent, CardMedia, CardActionArea, Button } from '@mui/material';
import { Grid } from '@material-ui/core';
import useStyles from './style.js';


const Card4 = () => {
    const classes = useStyles()

    return(
        <Grid>
            <Card style={{ background: 'linear-gradient(transparent, #E4584B)', borderRadius: '20px', boxShadow: '5px 10px 30px #263238', marginTop: '100px', width: '300px'}} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                className={classes.media4}
                height="200"
                alt='Portfolio'
                />
                <CardContent>
                    <p className={classes.typo} variant='h5'>
                        extras
                    </p>
                </CardContent>
                <CardActions >
                    <Button class={classes.cardButton} size='small'>Share</Button>
                    <Button class={classes.cardButton} size='small'>See More</Button>
                </CardActions>
                </CardActionArea>
            </Card>
        </Grid>
        
    )

}

export default Card4;
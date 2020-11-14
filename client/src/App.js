import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './img/memories.png';
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();
    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memo-img" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strecth" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <h1>Grid 1</h1>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <h1>Grid 2</h1>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
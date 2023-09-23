import React, {useEffect, useState} from "react";
import { Container,AppBar, Typography, Grow, Grid } from "@material-ui/core";

//hook
import { useDispatch } from "react-redux";

import Posts from './components/Posts/Posts'
import Form from "./components/Form/Form";
import graduation from './images/graduation.png';

import useStyles from './styles';

//import action
import {getPosts} from './actions/posts'

const App =()=>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();

    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);
    // 1 callback function
    //as the 2nd parameter we put empty array

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Socials</Typography>
                <img className={classes.image} src={graduation} alt="social" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            {/* xs = which is going to take full width of extra small device
                            sm = small medium which means its going to take 7 out of 12 spaces on small or larger devices */}
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;

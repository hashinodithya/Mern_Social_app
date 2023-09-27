import React, {useState, useEffect} from "react";
import { Container, Grow, Grid } from "@material-ui/core";

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { useDispatch } from "react-redux";
import {getPosts} from '../../actions/posts'
import { useEffect, useState } from "react";

const Home =()=>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();

    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);

    return(
        <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
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
    )
    
}

export default Home;
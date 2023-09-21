import React from "react";
import { Container,AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from './components/Posts/Posts'
import Form from "./components/Form/Form";
import graduation from './images/graduation.png'
const App =()=>{
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Socials</Typography>
                <img src={graduation} alt="social" heigth="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            {/* xs = which is going to take full width of extra small device
                            sm = small medium which means its going to take 7 out of 12 spaces on small or larger devices */}
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;

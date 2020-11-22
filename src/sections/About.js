import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
      grid_about: {
        marginTop: 90,
    },
    grid_about2: {
        marginTop: 20,
    },
}));


export function About() {
    const classes = useStyles();
    // state = {};
    // render() {
        return (
            <div className="about-section" id="about">
                <Typography variant="h2" gutterBottom>
                <Grid justify="center" container spacing={0}>
        <Grid item xs={11} className={classes.grid_about}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p>Sentya <span style={{color:"#bd5b3c"}}>Mersita </span></p>
          </Box>
        </Grid>
      </Grid>
      </Typography>
      <Typography variant="body1" gutterBottom >
                <Grid justify="center" container spacing={1}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p> thyamersita@gmail.com</p>
          </Box>
        </Grid>
      </Grid>
      </Typography>

      <Grid justify="center" container spacing={2}>
        <Grid item xs={11}>
        <Box m={1}>
        Name : Sentya Mersita, S.Kom
        <p> Place, date of birth : Ambon, 25-11-1996</p>
        <p> Status : Single</p>
            </Box>
          </Grid>
      </Grid>
      <Grid item xs={3}>
                <Box m={5} display="flex" flexDirection="row" flexWrap="wrap">
                <a href="https://github.com/Sentyamersita" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large" /></a>
                <a href="https://www.linkedin.com/in/sentya-mersita-2328a0165/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large" /></a>
                </Box>
              </Grid>
     
                </div>
            );
    // }
}

export default About;
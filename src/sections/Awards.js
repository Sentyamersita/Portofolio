import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';

const useStyles = makeStyles((theme) => ({
      grid: {
          marginTop: 2,
      },
      grid_skills: {
        marginTop: 150,
    },
}));

export function Awards() {
    const classes = useStyles();
    // state = {};
    // render() {
        return (
        <div className="awards-section" id="awards">
               <Grid justify="center" container spacing={3}>
        <Grid item xs={11} className={classes.grid_skills}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h1>AWARDS & CERTIFICATIONS</h1>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={1} className={classes.grid}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CardGiftcardIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={6}>
                <Box m={1}>
                 2019 : Xamarin
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1} className={classes.grid}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CardGiftcardIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={6}>
                <Box m={1}>
                 2018 : Introduction to Wireless LAN Installation
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1} className={classes.grid}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CardGiftcardIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={5}>
                <Box m={1}>
                2017 : C# For Intermediate at Gunadarma University
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1} className={classes.grid}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CardGiftcardIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={8}>
                <Box m={1}>
                 2016 : C# for Beginner at Gunadarma University
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={1} className={classes.grid}>
        <Grid item xs={11} sm={11} >
      <Grid container wrap="nowrap" spacing={0} >
              <Grid >
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <CardGiftcardIcon />
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={8}>
                <Box m={1}>
                 2015 : Fundamental Networking at Gunadarma University
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>
            </div>
        );
        
    // }
}

export default Awards;
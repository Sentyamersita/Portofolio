import React from "react";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      grid: {
          marginTop: 20,
      },
}));

export function Experience() {
    const classes = useStyles();
    // state = {};
    // render() {
        return (
            <div className="experience-section" id="experience">

      <Grid justify="center" container spacing={3} className={classes.grid}>
        <Grid item xs={11}>
          <Box fontWeight="fontWeightBold" m={1}>
            <h1>EXPERIENCE</h1>
          </Box>
        </Grid>
      </Grid>

      <Grid justify="center" container spacing={3}className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>IT Developer (Internship)</b>
                  </Box>
                  <Box m={1}>
                    MULTI INTI SARANA (MIS) GROUP
                  </Box>
                  <Box m={1}>
                    <body>Develop mobile application</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 Feb 2019 - March 2019
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>

      <Grid justify="center" container spacing={3} className={classes.grid}>
        <Grid item xs={11}>
      <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs={12}>
                <Typography fontWeight="fontWeightBold">
                  <Box m={1}>
                    <b>Pranata Komputer</b>
                  </Box>
                  <Box m={1}>
                    BADAN PENGAWAS OBAT DAN MAKANAN
                  </Box>
                  <Box m={1}>
                    <body>Manage and develop application programs Badan POM</body>
                    <body>Manage data and informations Badan POM</body>
                  </Box>
                </Typography> 
              </Grid>
              <Grid item xs={3}>
                <Box m={1}>
                 March 2019 - Present
                </Box>
              </Grid>
            </Grid>
      </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Experience;

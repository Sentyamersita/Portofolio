import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
      grid_interests: {
        marginTop: 150,
    },
}));

export function Interests() {
    const classes = useStyles();
    // state = {};
    // render() {
        return  (
            <div className="interests-section" id="interests">
                <Typography variant="h3" gutterBottom>
                <Grid justify="center" container spacing={0}>
        <Grid item xs={11} className={classes.grid_interests}>
          <Box fontWeight="fontWeightBold" m={1}>
            <p>INTERESTS</p>
          </Box>
        </Grid>
      </Grid>
      </Typography>

      <Grid justify="center" container spacing={2}>
        <Grid item xs={11}>
        <Box m={1}>
              Besides being a programming person, I actually want to be a businesswomen, my interest is in the food business, especially in restaurants and cake shops.
              I hope that the programming that i have learned now can be useful for the business that i will be running later.
            </Box>
          </Grid>
      </Grid>
                </div>
            );
    // }
}

export default Interests;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Toned20JPG from '../images/20-minutes-to-toned-thumb.jpg';
import Toned20Thumb from '../images/20-minutes-to-toned-trainer (2).jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 225,
    height: 275,
    fontFamily: 'Open Sans'
  },
  media: {
    height: 160,
  },
  thumb: {
    height: 30,
    width: 30,
  }
});

export default function LakeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Toned20JPG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container direction="row">
            <Grid item xs={9}>
              <Typography ariant="body1" component="p" align="left" style={{ fontWeight: '600' }}>
                20 Minutes to Toned
          </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia style={{ float: "right" }}
                className={classes.thumb}
                image={Toned20Thumb}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
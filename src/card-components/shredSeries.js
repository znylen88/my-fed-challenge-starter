import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShredSeriesJPG from '../images/shred-and-burn-thumb.jpg';
import ShredSeriesThumb from '../images/shred-and-burn-trainer.jpg';
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
          image={ShredSeriesJPG}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Grid container direction="row">
            <Grid item xs={9}>
              <Typography ariant="body1" component="p" align="left" style={{ fontWeight: '600' }}>
                Shred & Burn Series
          </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia style={{ float: "right" }}
                className={classes.thumb}
                image={ShredSeriesThumb}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
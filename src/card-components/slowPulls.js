import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SlowPullsJPG from '../images/slow-pulls-thumb.jpg';
import SlowPullsThumb from '../images/slow-pulls-trainer.jpg';
import Grid from '@material-ui/core/Grid';
import TimerIcon from '@material-ui/icons/Timer';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

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

export default function SlowPullsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={SlowPullsJPG}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Grid container direction="row">
            <Grid item xs={9}>
              <Typography ariant="body1" component="p" align="left" style={{ fontWeight: '600' }}>
              Slow Pulls and Fast Intervals
          </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia style={{ float: "right" }}
                className={classes.thumb}
                image={SlowPullsThumb}
              />
            </Grid>
          </Grid>
          <Typography variant="caption" component="p" align="left" style={{ fontWeight: '600' }}>
            <TimerIcon style={{ fontSize: '12px', marginBottom: '-2px' }}/> 44:13 <InsertLinkIcon style={{ fontSize: '14px', marginBottom: '-3px', marginLeft: '2px' }}/> 9,948 M
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
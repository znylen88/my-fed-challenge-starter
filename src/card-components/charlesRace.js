import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CharlesRaceJPG from '../images/charles-race-thumb.jpg';
import CharlesRaceThumb from '../images/charles-race-trainer.jpg'
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

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={CharlesRaceJPG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container direction="row">
            <Grid item xs={9}>
              <Typography ariant="body1" component="p" align="left" style={{ fontWeight: '600' }}>
                Charles Race, Boston, Massachusetts
          </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia style={{ float: "right" }}
                className={classes.thumb}
                image={CharlesRaceThumb}
              />
            </Grid>
          </Grid>
          <Typography variant="caption" component="p" align="left" style={{ fontWeight: '600' }}>
          <TimerIcon style={{ fontSize: '12px', marginBottom: '-2px' }}/> 36:22 <InsertLinkIcon style={{ fontSize: '14px', marginBottom: '-3px', marginLeft: '2px' }}/> 8,648 M
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
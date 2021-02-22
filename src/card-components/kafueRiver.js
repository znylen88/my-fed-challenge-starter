import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import KafueRiverJPG from '../images/kafue-river-thumb.jpg';
import KafueRiverThumb from '../images/kafue-river-trainer.jpg';
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

export default function LakeCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={KafueRiverJPG}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container direction="row">
          <Grid item xs={9}>
          <Typography variant="body1" component="p" align="left" style={{ fontWeight: '600' }}>
            Kafue River, Zambia Power Stroke Pyramid
          </Typography>
          </Grid>
          <Grid item xs={3}>
          <CardMedia style={{float: "right"}}
            className={classes.thumb}
            image={KafueRiverThumb}
            title="Contemplative Reptile"
          />
          </Grid>
          </Grid>
          <Typography variant="caption" component="p" align="left" style={{ fontWeight: '600' }}>
          <TimerIcon style={{ fontSize: '12px', marginBottom: '-2px' }}/> 22:22 <InsertLinkIcon style={{ fontSize: '14px', marginBottom: '-3px', marginLeft: '2px' }}/> 4,660 M
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
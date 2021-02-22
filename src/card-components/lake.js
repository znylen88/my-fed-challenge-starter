import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LakeJPG from '../images/lake-inniscarra-thumb.jpg'
import LakeThumb from '../images/lake-inniscarra-trainer.jpg';
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
          image={LakeJPG}
          title="Contemplative Reptile"
        />
        <CardContent>
        <Grid container direction="row">
            <Grid item xs={9}>
              <Typography ariant="body1" component="p" align="left" style={{ fontWeight: '600' }}>
              Lake Inniscarra, Ireland Pyramid
          </Typography>
            </Grid>
            <Grid item xs={3}>
              <CardMedia style={{ float: "right" }}
                className={classes.thumb}
                image={LakeThumb}
              />
            </Grid>
          </Grid>
          <Typography variant="caption" component="p" align="left" style={{ fontWeight: '600' }}>
          <TimerIcon style={{ fontSize: '12px', marginBottom: '-2px' }}/> 30:53 <InsertLinkIcon style={{ fontSize: '14px', marginBottom: '-3px', marginLeft: '2px' }}/> 6,248 M
          </Typography>
          <Button size="small" style={{ float: "left", marginLeft: "-7px", fontWeight: '600', color: "#2681CF" }}>
          VIEW DETAILS
        </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
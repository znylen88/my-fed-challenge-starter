import React from 'react';
import Grid from '@material-ui/core/Grid';
// import ExerciseCard from './cards';
import Container from '@material-ui/core/Container';
import LakeCard from './card-components/lake';
import PerformanceCard from './card-components/performanceSeries';
import SlowPullsCard from './card-components/slowPulls';
import Toned20Card from './card-components/toned20';
import CharlesRaceCard from './card-components/charlesRace';
import HiitCard from './card-components/hiit';
import KafueRiverCard from './card-components/kafueRiver';
import ShredSeriesCard from './card-components/shredSeries';

export default function CenteredGrid() {

    return (
        <div style={{ marginTop: '25px' }}>
            <Container>
                <Grid container spacing={3}
                    direction="row"
                    justify="space-evenly"
                    alignItems="center">
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <LakeCard>xs=3</LakeCard>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <PerformanceCard>xs=3</PerformanceCard>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <SlowPullsCard>xs=3</SlowPullsCard>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <Toned20Card>xs=3</Toned20Card>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <CharlesRaceCard>xs=3</CharlesRaceCard>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <HiitCard>xs=3</HiitCard>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <KafueRiverCard>xs=3</KafueRiverCard>
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={3}>
                        <ShredSeriesCard>xs=3</ShredSeriesCard>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
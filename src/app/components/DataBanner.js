import React from "react";
import * as PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {styles} from "../../styles/dataBannerStyles";
import searchGif from "../../styles/img/search.gif";
import deathsGif from "../../styles/img/deaths.gif";
import suspectGif from "../../styles/img/suspects.gif";
import recoveredGif from "../../styles/img/recovered.gif";
import confirmedGif from "../../styles/img/confirmed.gif";
import testGif from "../../styles/img/testes.gif";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {fetchCurrentData} from "../../store/actions/actionCreators";

class DataBanner extends React.Component {

    componentDidMount() {
        this.props.fetch_current_statistical();
    }

    render() {
        const {classes, newCases, confirmedCases, recoveredCases, activeCases, deaths, lastUpdateTime, dailyTests} = this.props;
        return (

            <React.Fragment>
                <Card variant="outlined" className={classes.card}>
                    <CardHeader
                        title="Number of COVID-19 Cases in Sri Lanka"
                        subheader= {'Last updated at: ' + lastUpdateTime}
                    />
                        <Grid container >
                            <Grid item xs>
                                <Card variant="outlined" className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={searchGif} variant='square'/>
                                        }
                                        subheader="New Cases"
                                        title={newCases}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined" className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={confirmedGif}  variant='square'/>
                                        }
                                        subheader="Confirmed Cases"
                                        title={confirmedCases}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined" className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={recoveredGif} variant='square'/>
                                        }
                                        subheader="Recovered Cases"
                                        title={recoveredCases}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined" className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={suspectGif} variant='square'/>
                                        }
                                        subheader="Active Cases"
                                        title={activeCases}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined" className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={deathsGif} variant='square'/>
                                        }
                                        subheader="Deaths"
                                        title={deaths}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs>
                                <Card variant="outlined" className={classes.card}>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={testGif} variant='square'/>
                                        }
                                        subheader= {"Tests Per Day"}
                                        title={dailyTests.count + ' (' + dailyTests.date + ')'}
                                    />
                                </Card>
                            </Grid>
                    </Grid>
                </Card>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        newCases: appState.newCases,
        confirmedCases: appState.confirmedCases,
        recoveredCases: appState.recoveredCases,
        activeCases: appState.activeCases,
        deaths: appState.deaths,
        lastUpdateTime: appState.lastUpdateTime,
        dailyTests: appState.dailyTests
    }
};

const mapDispatchToProps = {
    fetch_current_statistical: fetchCurrentData
};

DataBanner.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DataBanner));
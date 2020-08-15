import React from "react";
import * as PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {styles} from "../../styles/spreadAreasStyles";
import {fetchVisitedPlaces} from "../../store/actions/actionCreators";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import Link from "@material-ui/core/Link";

class SpreadAreas extends React.Component {

    componentDidMount() {
        this.props.fetch_visited_places();
    }

    render() {

        const {classes, visitedPlaces} = this.props;

        return (
            <React.Fragment>
                <Card variant="outlined" className={classes.card}>

                    <CardContent>
                        <Typography component="h5" variant="h5">
                            Public Places Visited By Cases In The Community
                        </Typography>
                    </CardContent>

                    <Grid container spacing={1}>

                        <Grid item xs>
                            <TableContainer component={Paper} className={classes.tableContainer}>
                                <Table stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className={classes.head}>Date</TableCell>
                                            <TableCell align="left" className={classes.head}>Time</TableCell>
                                            <TableCell align="left"
                                                       className={classes.head}>Location(Address)</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {visitedPlaces.map((row) => (
                                            <TableRow key={row.id} className={classes.row}>
                                                <TableCell component="th" scope="row"
                                                           className={classes.cell}>{row.date}</TableCell>
                                                <TableCell className={classes.cell}>{row.time}</TableCell>
                                                <TableCell className={classes.cell}>{row.location}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                        <Grid item xs>
                            <Card className={classes.tableContainer}>
                                <Grid container>
                                    <Grid item xs>
                                        <CardHeader
                                            avatar={
                                                <Avatar><LocationOnRoundedIcon/></Avatar>
                                            }
                                            title={
                                                <Link
                                                    href="https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/district_heatmap.png"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Explore the map
                                                </Link>
                                            }
                                            subheader="Places visited by Covid-19 cases in Sri Lanka"
                                        />

                                        <CardContent>
                                            <Typography variant="body2" component="p">
                                                These public places had been visited for more than 30 minutes by the
                                                confirmed cases in the community.
                                                If you have been at these locations during these specified timings,
                                                please share your or your relatives information with MOH Sri Lanka.
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs>
                                        <CardMedia
                                            component="img"
                                            src={"https://raw.githubusercontent.com/arimacdev/covid19-srilankan-data/master/Districts/district_heatmap.png"}
                                        />
                                    </Grid>
                                </Grid>

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
        visitedPlaces: appState.visitedPlaces
    }
};

const mapDispatchToProps = {
    fetch_visited_places: fetchVisitedPlaces
};

SpreadAreas.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SpreadAreas));
import React from "react";
import * as PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import {styles} from "../../styles/spreadAreasStyles";
import {closeDialog, fetchVisitedPlaces, submitData} from "../../store/actions/actionCreators";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

class SpreadAreas extends React.Component {
    state = {
        name: '',
        mobile: '',
        submitted: false
    };

    componentDidMount() {
        this.props.fetch_visited_places();
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleSubmit = () => {
        this.setState({'submitted': true});
        this.props.record_submit(this.state.name, this.state.mobile);
    };

    handleClose = () => {
        this.props.dialog_close();
        this.setState({
            name: '',
            mobile: '',
            submitted: false
        });
    };

    render() {
        const {classes, visitedPlaces, formDataResponse, formDataSubmit} = this.props;
        const {name, mobile, submitted} = this.state;

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
                            <Card className={classes.card}>
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
                                                please share your information with MOH Sri Lanka.
                                            </Typography>
                                            <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
                                                <div className={classes.formDiv}>
                                                    <TextValidator label="Name" id="name" variant='outlined'
                                                                   size='small' placeholder='Contact Name'
                                                                   onChange={this.handleChange} value={name}
                                                                   validators={['required', 'matchRegexp:^[a-zA-Z\\s]*$']}
                                                                   errorMessages={['name is required', 'invalid mobile contact name']}
                                                    />
                                                </div>
                                                <div className={classes.formDiv}>
                                                    <TextValidator label="Mobile" id="mobile" type='tel'
                                                                   variant='outlined' size='small'
                                                                   placeholder='0000000000'
                                                                   onChange={this.handleChange} value={mobile}
                                                                   validators={['required', 'matchRegexp:[0-9]{10}']}
                                                                   errorMessages={['contact number is required', 'invalid mobile number']}
                                                    />
                                                </div>
                                                <div className={classes.formDiv}>
                                                    <Button color="primary" variant="outlined" type="submit"
                                                            size='small'
                                                            disabled={submitted}>
                                                        {
                                                            (submitted && 'Your data is submitted.')
                                                            || (!submitted && 'Submit')
                                                        }
                                                    </Button>
                                                </div>
                                                <Dialog open={formDataSubmit} onClose={this.handleClose}>
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            {formDataResponse}
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={this.handleClose} color="primary">
                                                            Close
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </ValidatorForm>
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
        );
    }

}

const mapStateToProps = (appState) => {
    return {
        visitedPlaces: appState.visitedPlaces,
        formDataResponse: appState.formDataResponse,
        formDataSubmit: appState.formDataSubmit
    }
};

const mapDispatchToProps = {
    fetch_visited_places: fetchVisitedPlaces,
    record_submit: submitData,
    dialog_close: closeDialog
};

SpreadAreas.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SpreadAreas));
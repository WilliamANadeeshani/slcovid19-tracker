import React from 'react';
import * as PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {styles} from "../styles/appStyles";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Header from "./components/Header";
import DataBanner from "./components/DataBanner";
import SpreadAreas from "./components/SpreadAreas";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Alert from '@material-ui/lab/Alert';


class App extends React.Component {

    render() {
        const {classes, loadingCurrentData, loadingVisitedPlaces, dataLoading, isServiceError, serviceErrorMessage} = this.props;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <CssBaseline/>

                    <div className={classes.app}>
                        <Header/>

                        {
                            (isServiceError) ? <Alert severity="error">{serviceErrorMessage}</Alert> : null
                        }

                        <main className={classes.main}>
                            <DataBanner/>
                            <SpreadAreas/>
                        </main>

                        <footer className={classes.footer}>
                            <Typography variant="body2" color="textSecondary" align="center">
                                {'Copyright © '}
                                <Link color="textSecondary">
                                    Nadeeshani William
                                </Link>{' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                        </footer>

                    </div>

                </div>
                <Backdrop open={loadingCurrentData || loadingVisitedPlaces || dataLoading} className={classes.backdrop}>
                    <CircularProgress color="inherit"/>
                </Backdrop>

            </React.Fragment>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        loadingCurrentData: appState.loadingCurrentData,
        loadingVisitedPlaces: appState.loadingVisitedPlaces,
        dataLoading: appState.dataLoading,
        isServiceError: appState.isServiceError,
        serviceErrorMessage: appState.serviceErrorMessage
    }
};

const mapDispatchToProps = {};

App.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
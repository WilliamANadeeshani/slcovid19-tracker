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


class App extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>

                <div className={classes.app}>
                    <Header/>

                    <main className={classes.main}>
                        <DataBanner/>
                    </main>

                    <footer className={classes.footer}>
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Copyright © '}
                            <Link color="inherit" href="https://material-ui.com/">
                                Nadeeshani William
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </footer>

                </div>

            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {};

App.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
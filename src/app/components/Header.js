import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {styles} from '../../styles/headerStyles';

export default () => {
    const classes = styles();

    return (
        <React.Fragment>
            <AppBar elevation={0} className={classes.header}>
                <Toolbar>
                    <Typography variant="h6">Sri Lanka(Covid-19) Dashboard</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </React.Fragment>
    )
}


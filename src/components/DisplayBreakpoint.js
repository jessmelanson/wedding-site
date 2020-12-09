import React from 'react';
import { withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        bottom: 5,
        left: 5,
        backgroundColor: '#fff',
        padding: 10,
        border: '1px solid black'
    }
});

const DisplayBreakpoint = ({ width }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {width}
        </div>
    );
};

export default withWidth()(DisplayBreakpoint);

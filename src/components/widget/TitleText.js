import React from 'react';
import PropTypes from 'prop-types';
import { Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    section: {
        padding: theme.spacing(2)
    },
    title: {
        textTransform: 'uppercase'
    },
    text: {
        fontWeight: 'normal'
    }
}));

const TitleText = ({ title, text }) => {
    const classes = useStyles();
    const theme = useTheme();

    const headingVariant = useMediaQuery(theme.breakpoints.down('sm')) ? 'h5' : 'h4';
    const textVariant = useMediaQuery(theme.breakpoints.down('sm')) ? 'h6' : 'h5';

    return (
        <div className={classes.section}>
            <Typography
                className={classes.title}
                component="p"
                variant={headingVariant}
                gutterBottom
            >
                {title}
            </Typography>
            <Typography
                className={classes.text}
                component="p"
                variant={textVariant}
                gutterBottom
            >
                {text}
            </Typography>
        </div>
    );
};

TitleText.propTypes = PropTypes.exact({
    title: PropTypes.string,
    text: PropTypes.string
}).isRequired;

export default TitleText;
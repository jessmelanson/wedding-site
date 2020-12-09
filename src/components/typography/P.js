import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paragraph: {
        marginBottom: theme.spacing(2)
    }
}));

const P = ({ children, classNames }) => {
    const classes = useStyles();
    return (
        <Typography
            component="p"
            className={classNames ? `${classes.paragraph} ${classNames}` : classes.paragraph}
            variant="body1"
        >
            {children}
        </Typography>
    );
};

P.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    classNames: PropTypes.string
};

export default P;
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';

const H1 = ({ children }) => {
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Typography
            component="h1"
            variant={isSmallBreakpoint ? 'h2' : 'h1'}
            gutterBottom
        >
            {children}
        </Typography>
    );
};

H1.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default H1;
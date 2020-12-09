import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';

const H3 = ({ children }) => {
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Typography
            component="h3"
            variant={isSmallBreakpoint ? 'h6' : 'h5'}
            gutterBottom
        >
            {children}
        </Typography>
    );
};

H3.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default H3;
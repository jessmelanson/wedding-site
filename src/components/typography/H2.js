import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';

const H2 = ({ children }) => {
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Typography
            component="h2"
            variant={isSmallBreakpoint ? 'h3' : 'h2'}
            gutterBottom
        >
            {children}
        </Typography>
    );
};

H2.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default H2;
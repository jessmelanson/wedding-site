import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import useSectionStyles from '../../styles/useSectionStyles';
import H2 from '../typography/H2';
import P from '../typography/P';

const ConfigurableSection = ({ title, text, children }) => {
    const classes = useSectionStyles();

    return (
        <Grid container className={classes.section} spacing={2}>
            <Grid item xs={12}>
                <H2>{title}</H2>
                {text && (
                    text.split('\n\n').map(paragraph => <P>{paragraph}</P>)
                )}
            </Grid>
            {children}
        </Grid>
    );
};

ConfigurableSection.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired
};

export default ConfigurableSection;
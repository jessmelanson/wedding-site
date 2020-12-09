import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    widget: ({ size }) => ({
        borderRadius: theme.spacing(1) / 2,
        border: `1px solid ${theme.palette.grey[500]}`,
        width: '95%',
        minHeight: size === 'small' ? theme.spacing(4) * 10 : theme.spacing(9) * 10,
        [theme.breakpoints.down('xs')]: {
            minHeight: size === 'small' ? theme.spacing(3) * 10 : theme.spacing(8) * 10
        }
    })
}));

const EmbeddedWidget = ({ size, title, src }) => {
    const classes = useStyles({ size });

    return (
        <iframe
            frameBorder={0}
            className={classes.widget}
            src={src}
            title={title}
        >
        </iframe>
    );
};

EmbeddedWidget.propTypes = {
    size: PropTypes.string,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
};

export default EmbeddedWidget;
import React from 'react';
import PropTypes from 'prop-types';
import { Button, IconButton, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles(theme => ({
    navButtonContainer: {
        borderRadius: theme.spacing(1) / 2,
        backgroundColor: 'rgba(250, 250, 250, 0.5)',
        margin: theme.spacing(1),
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999
    },
    navButton: {
        padding: theme.spacing(1)
    }
}));

const NavButton = ({ onClick, open }) => {
    const theme = useTheme();
    const classes = useStyles();

    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    const ariaLabel = open ? 'Close menu' : 'Open menu';
    const icon = open ? <CloseRoundedIcon /> : <MenuRoundedIcon />;

    return (
        <div className={classes.navButtonContainer}>
            {isSmallBreakpoint && (
                <IconButton
                    aria-label={ariaLabel}
                    className={classes.navButton}
                    color="inherit"
                    disableRipple
                    disableFocusRipple
                    onClick={onClick}
                >
                    {icon}
                </IconButton>
            )}
            {!isSmallBreakpoint && (
                <Button
                    aria-label={ariaLabel}
                    className={classes.navButton}
                    disableRipple
                    disableFocusRipple
                    onClick={onClick}
                    size="large"
                    startIcon={icon}
                >
                    <span className={classes.openMenuLabel}>Menu</span>
                </Button>
            )}
        </div>
    );
};

NavButton.propTypes = PropTypes.exact({
    onClick: PropTypes.func,
    open: PropTypes.bool
}).isRequired;

export default NavButton;
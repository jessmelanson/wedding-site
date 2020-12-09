import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import navContent from '../../content/nav.json';

const useStyles = makeStyles(theme => ({
    menu: {
        backgroundColor: theme.palette.background.paper,
        minWidth: theme.spacing(3) * 10
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

const NavMenu = ({ onClose, open }) => {
    const history = useHistory();
    const classes = useStyles();
    const links = Object.values(navContent);

    const handleLinkClick = url => {
        history.push(url);
        window.scrollTo(0, 0);
        onClose();
    };

    const renderLinks = () => links.map(({ title, url, target }, idx) => (
        <Fragment key={`${title}-${idx}`}>
            {target && (
                <ListItem
                    button
                    divider={links.length - 1 !== idx}
                >
                    <a className={classes.link} href={url} target={target}>
                        <ListItemText>
                            {title}
                        </ListItemText>
                    </a>
                </ListItem>
            )}
            {!target && (
                <ListItem
                    button
                    divider={links.length - 1 !== idx}
                    onClick={() => handleLinkClick(url)}
                >
                    <ListItemText>
                        {title}
                    </ListItemText>
                </ListItem>
            )}
        </Fragment>
    ));

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
        >
            <div className={classes.menu}>
                <List component="nav">
                    {renderLinks()}
                </List>
            </div>
        </Drawer>
    );
};

NavMenu.propTypes = PropTypes.exact({
    onClose: PropTypes.func,
    open: PropTypes.bool
}).isRequired;

export default NavMenu;
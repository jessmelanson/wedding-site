import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

import useListStyles from '../../styles/useListStyles';

const ContactInfo = ({ address, phone }) => {
    const classes = useListStyles();

    return (
        <List>
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText>
                    {address}
                </ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
                <ListItemIcon>
                    <PhoneRoundedIcon />
                </ListItemIcon>
                <ListItemText>
                    {phone}
                </ListItemText>
            </ListItem>
        </List>
    );
};

ContactInfo.propTypes = PropTypes.exact({
    address: PropTypes.string,
    phone: PropTypes.string
}).isRequired;

export default ContactInfo;
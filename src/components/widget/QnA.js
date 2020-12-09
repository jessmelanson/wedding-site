import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ContactInfo from './ContactInfo';

const useStyles = makeStyles(theme => ({
    text: {
        padding: 0,
        margin: 0
    },
    list: {
        marginTop: theme.spacing(2)
    }
}));

const QnA = ({ question, answer }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleLinkClick = url => {
        history.push(url);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <ListItem className={classes.listItem}>
                <ListItemText>
                    <Typography
                        className={classes.text}
                        component="span"
                        variant="h6"
                    >
                        {question}
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
                <ListItemText>
                    <Typography
                        className={classes.text}
                        component="span"
                        variant="body1"
                    >
                        {answer.map(el => (
                            <Fragment key={el.content}>
                                {el.type === 'text' && el.content}
                                {el.type === 'externalLink' && (
                                    <a href={el.href} target={el.target}>
                                        {el.content}
                                    </a>
                                )}
                                {el.type === 'internalLink' && (
                                    <Link onClick={() => handleLinkClick(el.href)}>
                                        {el.content}
                                    </Link>
                                )}
                                {el.type === 'locationList' && (
                                    <ul className={classes.list}>
                                        {el.content.map(({ title, address, phone }) => (
                                            <li key={title}>
                                                {title}
                                                <ContactInfo address={address} phone={phone} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </Fragment>
                        ))}
                    </Typography>
                </ListItemText>
            </ListItem>
        </>
    );
};

QnA.propTypes = PropTypes.exact({
    question: PropTypes.string,
    answer: PropTypes.string
}).isRequired;

export default QnA;
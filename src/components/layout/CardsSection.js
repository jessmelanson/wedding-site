import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import useSectionStyles from '../../styles/useSectionStyles';
import H2 from '../typography/H2';
import P from '../typography/P';

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%'
    },
    role: {
        fontStyle: 'italic'
    },
    pic: {
        width: '100%'
    }
}));

const CardsSection = ({ title, cards }) => {
    const classes = { ...useSectionStyles(), ...useStyles() };

    return (
        <Grid className={classes.section} container spacing={2}>
            <Grid item xs={12}>
                <H2>{title}</H2>
            </Grid>
            {cards.map(({ name, image, role, bio }) => (
                <Grid item key={name} md={6} xs={12}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <img
                                        alt={`${name}, ${role}`}
                                        className={classes.pic}
                                        src={image}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography component="h3" variant="h6" gutterBottom>
                                        {name}
                                    </Typography>
                                    <P classNames={classes.role}>
                                        {role}
                                    </P>
                                </Grid>
                                <Grid item xs={12}>
                                    <P>{bio}</P>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

CardsSection.propTypes = PropTypes.exact({
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({
        bio: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        role: PropTypes.string
    }))
}).isRequired;

export default CardsSection;
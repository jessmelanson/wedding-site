import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { hero, body } from '../../content/homepage.json';
import Hero from '../layout/Hero';
import ConfigurableSection from '../layout/ConfigurableSection';

const useStyles = makeStyles(theme => ({
    skyPhoto: {
        backgroundPosition: '65% 100%',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: '65% 80%'
        }
    }
}));

const Home = () => {
    const classes = useStyles();

    const renderSections = () => body.sections.map(({ title, text }) => (
        <ConfigurableSection title={title} text={text} key={title} />
    ));

    return (
        <>
            <Hero
                backgroundImage={hero.image}
                classNames={classes.skyPhoto}
                description={hero.description}
                title={hero.title}
                variant="imageFullBleed"
            />
            <Container maxWidth="md">
                {renderSections()}
            </Container>
        </>
    );
};

export default Home;
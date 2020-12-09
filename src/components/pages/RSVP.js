import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { hero, body } from '../../content/rsvp.json';
import Hero from '../layout/Hero';
import ConfigurableSection from '../layout/ConfigurableSection';
import EmbeddedWidget from '../widget/EmbeddedWidget';

const useStyles = makeStyles({
    letterPic: {
        backgroundPositionY: '38%'
    }
});

const RSVP = () => {
    const classes = useStyles();
    const { title, image } = hero;
    const { sections } = body;

    return (
        <>
            <Hero
                backgroundImage={image}
                classNames={classes.letterPic}
                gradient
                title={title}
                variant="imageShort"
            />
            <Container maxWidth="md">
                {sections.map(({ title, text, rsvpSrc, rsvpTitle }) => (
                    <ConfigurableSection title={title} text={text}>
                        <EmbeddedWidget
                            src={rsvpSrc}
                            title={rsvpTitle}
                            size="large"
                        />
                    </ConfigurableSection>
                ))}
            </Container>
        </>
    );
};

export default RSVP;
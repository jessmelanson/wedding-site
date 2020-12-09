import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { hero, body } from '../../content/registry.json';
import Hero from '../layout/Hero';
import ConfigurableSection from '../layout/ConfigurableSection';
import EmbeddedWidget from '../widget/EmbeddedWidget';

const useStyles = makeStyles({
    giftPic: {
        backgroundPositionY: '40%'
    }
});

const Registry = () => {
    const classes = useStyles();
    const { sections } = body;

    return (
        <>
            <Hero
                backgroundImage={hero.image}
                classNames={classes.giftPic}
                gradient
                title={hero.title}
                variant="imageShort"
            />
            <Container maxWidth="md">
                {sections.map(({ title, text, registrySrc, registryTitle }) => (
                    <ConfigurableSection title={title} text={text}>
                        <EmbeddedWidget
                            src={registrySrc}
                            title={registryTitle}
                            size="large"
                        />
                    </ConfigurableSection>
                ))}
            </Container>
        </>
    );
};

export default Registry;
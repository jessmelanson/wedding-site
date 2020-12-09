import React, { Fragment } from 'react';
import { Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { hero, body } from '../../content/lodging-travel.json';
import Hero from '../layout/Hero';
import ConfigurableSection from '../layout/ConfigurableSection';
import ContactInfo from '../widget/ContactInfo';
import EmbeddedWidget from '../widget/EmbeddedWidget';
import H3 from '../typography/H3';
import P from '../typography/P';

const useStyles = makeStyles(theme => ({
    fireplacePic: {
        backgroundPositionY: '45%'
    },
    button: {
        margin: `${theme.spacing(2)}px 0`
    }
}));

const LodgingTravel = () => {
    const classes = useStyles();
    const { sections } = body;

    return (
        <>
            <Hero
                backgroundImage={hero.image}
                classNames={classes.fireplacePic}
                gradient
                title={hero.title}
                variant="imageShort"
            />
            <Container maxWidth="md">
                {sections.map(({ title, options }) => (
                    <ConfigurableSection title={title} key={title}>
                        {options.map(({ address, buttonLabel, description, mapSrc, mapTitle, phone, url }) => (
                            <Fragment key={mapTitle}>
                                <Grid item xs={12} md={8}>
                                    <H3>{mapTitle}</H3>
                                    <P>{description}</P>
                                    {address && phone && (
                                        <ContactInfo address={address} phone={phone} />
                                    )}
                                    <Button
                                        aria-label={`Visit ${mapTitle} website`}
                                        className={classes.button}
                                        color="primary"
                                        href={url}
                                        variant="contained"
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <EmbeddedWidget
                                        size="small"
                                        title={mapTitle}
                                        src={mapSrc}
                                    />
                                </Grid>
                            </Fragment>
                        ))}
                    </ConfigurableSection>
                ))}
            </Container>
        </>
    );
};

export default LodgingTravel;
import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { hero, body } from '../../content/schedule.json';
import Hero from '../layout/Hero';
import ConfigurableSection from '../layout/ConfigurableSection';
import ResponsiveTable from '../widget/ResponsiveTable';

const useStyles = makeStyles({
    archPic: {
        backgroundPositionY: '30%'
    }
});

const Schedule = () => {
    const classes = useStyles();
    const { sections } = body;

    return (
        <>
            <Hero
                backgroundImage={hero.image}
                classNames={classes.archPic}
                gradient
                title={hero.title}
                variant="imageShort"
            />
            <Container maxWidth="md">
                {sections.map(({ headings, rows, title, text }) => (
                    <ConfigurableSection key={title} title={title} text={text}>
                        <Grid item xs={12}>
                            <ResponsiveTable headings={headings} rows={rows} />
                        </Grid>
                    </ConfigurableSection>
                ))}
            </Container>
        </>
    );
};

export default Schedule;
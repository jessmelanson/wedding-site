import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { hero, body } from '../../content/ceremony-program.json';
import Hero from '../layout/Hero';
import TitleText from '../widget/TitleText';

const useStyles = makeStyles(theme => ({
    program: {
        textAlign: 'center',
        padding: `${theme.spacing(4)}px 0`,
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(3)}px 0`
        }
    }
}));

const CeremonyProgram = () => {
    const classes = useStyles();
    const { title, image } = hero;
    const { sections } = body;

    return (
        <>
            <Hero
                backgroundImage={image}
                center
                gradient
                title={title}
                variant="imageShort"
            />
            <Container className={classes.program} maxWidth="md">
                {sections.map(({ heading, text }) => (
                    <TitleText title={heading} text={text} />
                ))}
            </Container>
        </>
    );
};

export default CeremonyProgram;
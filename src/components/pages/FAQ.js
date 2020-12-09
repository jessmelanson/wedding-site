import React from 'react';
import { Container, List } from '@material-ui/core';

import { hero, body } from '../../content/faqs.json';
import useSectionStyles from '../../styles/useSectionStyles';
import Hero from '../layout/Hero';
import QnA from '../widget/QnA';

const FAQ = () => {
    const classes = useSectionStyles();
    const { title } = hero;
    const { sections } = body;

    return (
        <>
            <Hero
                title={title}
                variant="textOnly"
            />
            <Container maxWidth="md">
                <List className={classes.section}>
                    {sections.map(({ question, answer }) => (
                        <QnA question={question} answer={answer} />
                    ))}
                </List>
            </Container>
        </>
    );
};

export default FAQ;
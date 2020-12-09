import React from 'react';
import { Container } from '@material-ui/core';

import { hero, body } from '../../content/wedding-party.json';
import Hero from '../layout/Hero';
import CardsSection from '../layout/CardsSection';

const Home = () => {
    const { sections } = body;

    return (
        <>
            <Hero
                backgroundImage={hero.image}
                description={hero.description}
                gradient
                title={hero.title}
                variant="imageShort"
            />
            <Container maxWidth="md">
                {sections.map(({ cards, title }) => (
                    <CardsSection cards={cards} key={title} title={title} />
                ))}
            </Container>
        </>
    );
};

export default Home;
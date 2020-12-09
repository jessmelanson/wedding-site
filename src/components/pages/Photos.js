import React from 'react';
import { Container } from '@material-ui/core';

import { hero, photos } from '../../content/photos.json';
import Hero from '../layout/Hero';
import PhotoTilesSection from '../layout/PhotoTilesSection';

const Photos = () => {
    const { description, title } = hero;

    return (
        <>
            <Hero
                description={description}
                title={title}
                variant="textOnly"
            />
            <Container maxWidth="lg">
                <PhotoTilesSection photos={photos} />
            </Container>
        </>
    );
};

export default Photos;
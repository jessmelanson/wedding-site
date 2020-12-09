import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import H1 from '../typography/H1';
import P from '../typography/P';

const useStyles = makeStyles(theme => ({
    heroBase: {
        padding: theme.spacing(2)
    },
    imageFullBleed: ({ backgroundImage, gradient }) => ({
        backgroundImage: (
            gradient
                ? `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(${backgroundImage})`
                : `url(${backgroundImage})`
        ),
        backgroundPosition: 'right bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
        maxWidth: '100%'
    }),
    textOnly: {
        backgroundColor: theme.palette.grey[100],
        width: '100%',
        minHeight: theme.spacing(3) * 10
    },
    imageShort: props => ({
        background: (
            props.gradient
                ? `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(${props.backgroundImage})`
                : `url(${props.backgroundImage})`
        ),
        backgroundSize: 'cover',
        width: '100%',
        minHeight: theme.spacing(4) * 10
    }),
    heroTextBase: {
        position: 'relative',
        zIndex: 0
    },
    imageFullBleedHeroText: {
        top: '10%'
    },
    imageShortHeroText: {
        top: theme.spacing(8)
    },
    textOnlyHeroText: {
        top: theme.spacing(5)
    },
    centerHeroText: {
        top: theme.spacing(8),
        textAlign: 'center'
    }
}));

const Hero = ({
    backgroundImage,
    center,
    classNames,
    description,
    gradient,
    title,
    variant
}) => {
    const classes = useStyles({ backgroundImage, gradient });

    const getHeroClass = () => {
        let heroClass = `${classes.heroBase} ${classes[variant]}`;
        if (classNames) heroClass += ` ${classNames}`;
        return heroClass;
    };

    const getHeroTextClass = () => {
        if (center) return `${classes.heroTextBase} ${classes.centerHeroText}`;

        return `${classes.heroTextBase} ${classes[`${variant}HeroText`]}`;
    };

    return (
        <div className={getHeroClass()}>
            <Container
                className={getHeroTextClass()}
                maxWidth="md"
            >
                <H1>{title}</H1>
                {description && <P>{description}</P>}
            </Container>
        </div>
    );
};

Hero.propTypes = {
    backgroundImage: PropTypes.string,
    center: PropTypes.bool,
    classNames: PropTypes.string,
    description: PropTypes.string,
    gradient: PropTypes.bool,
    title: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
};

export default Hero;
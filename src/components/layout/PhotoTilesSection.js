import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import useSectionStyles from '../../styles/useSectionStyles';

const useStyles = makeStyles(theme => ({
    photos: {
        lineHeight: 0,
        columnCount: 3,
        [theme.breakpoints.down('sm')]: {
            columnCount: 2
        },
        [theme.breakpoints.down('xs')]: {
            columnCount: 1
        }
    },
    photo: {
        width: '100%',
        height: 'auto',
        minWidth: theme.spacing(3) * 10,
        minHeight: theme.spacing(1) * 10,
        margin: theme.spacing(1)
    }
}));

const PhotoTilesSection = ({ photos }) => {
    const classes = { ...useSectionStyles(), ...useStyles() };

    return (
        <div className={`${classes.section} ${classes.photos}`}>
            {photos.map(({ title, url }) => (
                <img
                    className={classes.photo}
                    src={url}
                    alt={title}
                    title={title}
                    key={title}
                />
            ))}
        </div>
    );
};

PhotoTilesSection.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
    })).isRequired
};

export default PhotoTilesSection;
import React from 'react';
import { Container, Divider, Grid, Link, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { contact, hashtag } from '../../content/footer.json';

const useStyles = makeStyles(theme => ({
    divider: {
        margin: `0 auto ${theme.spacing(2)}px auto`,
        width: '60%'
    },
    footerContainer: {
        marginBottom: theme.spacing(4),
        padding: theme.spacing(3)
    }
}));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();

    const itemSpacing = useMediaQuery(theme.breakpoints.down('xs')) ? 2 : 4;

    return (
        <Container className={classes.footerContainer}>
            <Divider className={classes.divider} />
            <Grid
                container
                justify="center"
                spacing={itemSpacing}
            >
                <Grid item>
                    <Link href={`mailto:${contact}`}>{contact}</Link>
                </Grid>
                <Grid item>
                    <Link
                        href={`https://www.instagram.com/explore/tags/${hashtag}`}
                        rel="noopener"
                        target="_blank"
                    >
                        #{hashtag}
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
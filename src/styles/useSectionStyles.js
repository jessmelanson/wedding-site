import { makeStyles } from '@material-ui/core/styles';

const useSectionStyles = makeStyles(theme => ({
    section: {
        margin: `${theme.spacing(4)}px 0`,
        [theme.breakpoints.down('sm')]: {
            margin: `${theme.spacing(3)}px 0`
        }
    }
}));

export default useSectionStyles;
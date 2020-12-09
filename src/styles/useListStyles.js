import { makeStyles } from '@material-ui/core/styles';

const useListStyles = makeStyles(theme => ({
    listItem: {
        padding: `${theme.spacing(1)}px 0`
    }
}));

export default useListStyles;
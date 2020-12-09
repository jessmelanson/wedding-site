import React from 'react';
import PropTypes from 'prop-types';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    table: {
        maxWidth: '100%',
        margin: theme.spacing(1)
    },
    cell: {
        minWidth: '15%'
    }
}));

const ResponsiveTable = ({ headings, rows }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.table}>
            <TableContainer>
                <Table aria-label="schedule table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {headings.map(heading => (
                                <TableCell
                                    className={classes.cell}
                                    key={heading}
                                >
                                    {heading}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ cells, title }) => (
                            <TableRow key={title}>
                                {cells.map(cell => (
                                    <TableCell key={cell}>
                                        {cell}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

ResponsiveTable.propTypes = PropTypes.exact({
    headings: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        cells: PropTypes.arrayOf(PropTypes.string)
    }))
}).isRequired;

export default ResponsiveTable;
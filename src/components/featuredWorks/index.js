import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListWork from '../itemListWork';
import { listWorks } from '../../const';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '70ch',
    },
}));


export default function AlignItemsList() {
    const classes = useStyles();

    return (
        <section
            id='jobPage'
            className='jobs'
        >
            <main>
                <Typography variant="h4" color="Primary">
                    Trabajos destacados
                </Typography>
                <List className={classes.root}>
                    {listWorks.map((work) => (
                        <ListWork
                            title={work.title}
                            description={work.description}
                            link={work.link}
                        />
                    ))}
                </List>
            </main>
        </section>
    );
}
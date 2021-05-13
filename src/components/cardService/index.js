import React from 'react';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const Index = (props) => {

    const useStyles = makeStyles({
        root: {
            width: props.width,
            height: props.height,
            marginLeft: props.maginLeft,
            marginBottom: '20px',
            padding: '4vh 0vw',
            maxHeight: props.maxHeight
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" color='primary' component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    href='https://api.whatsapp.com/send?phone=522463620177&text=Qu%C3%A9%20tal%20me%20interesa%20tu%20trabajo%20cu%C3%A9ntame%20m%C3%A1s...%20'
                >Contactame</Button>
            </CardActions>
        </Card>
    );
}

export default Index;

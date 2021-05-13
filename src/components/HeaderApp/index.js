import React from 'react';
import { Typography, Button, makeStyles, Avatar } from '@material-ui/core';
import useTheme from '../../Hooks/useTheme';
import avatar from '../../img/avatar.jfif';
import './style.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
        margin: 'auto'
    },
}));

const HeaderApp = ({ title = "title", description = "description", btnText = 'button text' }) => {
    const { COLORTITLE, COLORTEXT } = useTheme()
    const classes = useStyles();
    return (
        <div className='header-app'>
            <div className='header-app__item' >
                <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
            </div>
            <div className='header-app__item'>
                <Typography
                    variant="h4"
                    component="h1"
                    className={COLORTITLE}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    className={COLORTEXT}
                >
                    {description}
                </Typography>
                <Button
                    href='https://www.linkedin.com/in/kevin-gutierrez-3679181b5/'
                    variant="contained" color="secondary"  >
                    {btnText}
                </Button>
            </div>
        </div>
    )
}

export default HeaderApp;
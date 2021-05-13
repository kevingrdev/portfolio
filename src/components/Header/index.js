import React from 'react';
import { Grid, Typography, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../img/avatar.jfif';
import useTheme from '../../Hooks/useTheme';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
}));

const Header = ({ title = 'title', description = 'description', btnText = 'button text' }) => {
    const { COLORTITLE, COLORTEXT } = useTheme()
    const classes = useStyles();

    return (

        <div>

            <Grid
                item
                xs={12}
                md={6}
                style={{ order: '2' }}
            >
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
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                style={{ display: 'flex', justifyContent: 'center', order: '1' }}
            >
                <Avatar alt="Remy Sharp" src={avatar} className={classes.large} />
            </Grid>
        </div>
    )
}
export default Header;
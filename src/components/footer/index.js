import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import useTheme from '../../Hooks/useTheme';

const Index = () => {

    const { COLORTEXT } = useTheme();

    return (
        <>
            <footer
                style={{ position: 'absolute', bottom: '0' }}
            >
            </footer>
            <Grid
                container
                xs={8}
                md={3}
                style={{ justifyContent: 'space-around', margin: 'auto' }}
            >
                <IconButton
                    // onClick={toLinkedIn}
                    rel="noreferrer" target="_blank"
                    href='https://www.instagram.com/kevvingr/'
                >
                    <InstagramIcon
                        className={COLORTEXT}
                    />
                </IconButton>
                <IconButton
                    rel="noreferrer" target="_blank"
                    href='https://github.com/keivnGutierrez?tab=followers'
                >
                    <GitHubIcon
                        className={COLORTEXT}

                    />
                </IconButton>
                <IconButton
                    rel="noreferrer" target="_blank"
                    href='https://www.linkedin.com/in/kevin-gutierrez-3679181b5/'
                >
                    <LinkedInIcon
                        className={COLORTEXT}

                    />
                </IconButton>
            </Grid>
            <Typography
                align="center"
                variant='overline'
                display="block"
                className={COLORTEXT}
            >
                Copyright ©2021 All rights reserved
            </Typography>
        </>
    );
}

export default Index;

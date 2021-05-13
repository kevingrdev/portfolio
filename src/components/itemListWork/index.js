import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { ListItemIcon } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import useTheme from '../../Hooks/useTheme';


const ItemListWork = ({ title, description, link }) => {
    
    const{COLORTEXT,COLORTITLE}= useTheme();
    return (
        <>
            <ListItem alignItems="center">
                <ListItemIcon>
                    <CodeIcon color='primary' />
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    className={COLORTITLE}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                // className={classes.inline}
                                className={COLORTEXT}
                                // color="textPrimary"
                            >
                            {`-${description}`}
                            </Typography >
                            <a
                                href={link}
                            >
                                <Typography>
                                    Ver pagina
                                </Typography>
                            </a>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
}

export default ItemListWork;

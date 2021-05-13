import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import { scrollTo } from '../../const';
import useTheme from '../../Hooks/useTheme';

export default function ButtonAppBar() {
    const { COLORTEXT } = useTheme()
    const handleClick = () => {
        scrollTo('jobPage')
    }

    return (
        <div>
            <AppBar
                color='transparent'
                position="static"
            // style={{background:'red'}}
            >

                <Toolbar
                    style={{ justifyContent: 'flex-end', webkitBoxShadow: 'inset 1px -5px 10px -9px rgba(200,200,200,0.70)' }}
                >
                    <Button
                        variant="outlined"
                        onClick={handleClick}
                        color='primary'
                        style={{ marginRight: '5px' }}
                        startIcon={<WebAssetIcon />}
                    >
                        Trabajos
                    </Button>
                    <Button
                        variant="outlined"
                        color='primary'
                        startIcon={<WhatsAppIcon />}
                        href='https://api.whatsapp.com/send?phone=522463620177&text=Qu%C3%A9%20tal%20me%20interesa%20tu%20trabajo%20cu%C3%A9ntame%20m%C3%A1s...%20'
                    >
                        Contactame
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
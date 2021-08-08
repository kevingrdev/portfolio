
import { Button, makeStyles, Avatar } from '@material-ui/core';
import useTheme from '../../Hooks/useTheme';
import useImage from '../../Hooks/useImage';

import './style.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(24),
        height: theme.spacing(24),
        margin: 'auto'
    },
}));

const HeaderApp = ({ title = "title", description = "description", btnText = 'button text' }) => {
    const { COLORTITLE, COLORTEXT } = useTheme()
    const classes = useStyles();
    const url = 'https://scontent.fpbc1-2.fna.fbcdn.net/v/t1.6435-9/225779712_2708080332822824_4440776856446957636_n.jpg?_nc_cat=101&ccb=1-4&_nc_sid=09cbfe&_nc_ohc=QBBTth6ajhIAX-e_EHG&_nc_ht=scontent.fpbc1-2.fna&oh=87d8ce4d06f0b042e0505019f92516d3&oe=613534F3';
    const { img } = useImage({ urlImg: url })
    return (
        <div className='header-app'>
            <div className='header-app__item mb-15' >
                <Avatar alt="Remy Sharp" src={img} className={classes.large} />
            </div>
            <div className='header-app__item'>
                <h1
                    className={`header--title mt-15 mb-15 ${COLORTITLE}`}
                >
                    {title}
                </h1>
                <p
                    className={`header--paragraph mt-15 mb-15 ${COLORTEXT}`}
                >
                    {description}
                </p>
                <Button
                    style={{ margin: '20px 0px' }}
                    rel="noreferrer" target="_blank"
                    href='https://www.linkedin.com/in/kevin-gutierrez-3679181b5/'
                    variant="contained" color="secondary"  >
                    {btnText}
                </Button>
            </div>
        </div>
    )
}

export default HeaderApp;
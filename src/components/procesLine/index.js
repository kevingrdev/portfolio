import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import WebIcon from '@material-ui/icons/Web';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline({title}) {
    const classes = useStyles();

    return (
        <div style={{ margin: '30px 0vw' }}>
            <Typography variant="h4" display='block' color='primary' gutterBottom>
                {title}
            </Typography>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <ContactPhoneIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Contactame
                            </Typography>
                            <Typography>Por: <a href='https://api.whatsapp.com/send?phone=522463620177&text=Qu%C3%A9%20tal%20me%20interesa%20tu%20trabajo%20cu%C3%A9ntame%20m%C3%A1s...%20'>whatsApp</a>, <a href='mailto:kevingutierrez6595@gmail.com'>email</a>,  <a href='https://www.linkedin.com/in/kevin-gutierrez-3679181b5/'>linkedin</a></Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <WebIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Vamos al codigo
                            </Typography>
                            <Typography>Trabajaremos en conjunto hasta encontrar la mejor solución para tus clientes</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <RepeatIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Listo
                           </Typography>
                            <Typography>Recomiendame!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>

    );
}
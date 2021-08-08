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

export default function CustomizedTimeline({ title }) {
    const classes = useStyles();

    return (
        <div style={{ margin: '30px auto', maxWidth: '1440px', minHeight: '500px' }}>
            <Typography variant="h4" display='block' color='Secondary' gutterBottom>
                {title}
            </Typography>
            <div style={{ marginTop: '80px' }} />

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
                            <Typography>Por: <a href='mailto:kevingutierrez6595@gmail.com' rel="noreferrer" target="_blank">Email</a> y <a href='https://www.linkedin.com/in/kevin-gutierrez-3679181b5/' rel="noreferrer" target="_blank">Linkedin</a></Typography>
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
                            <Typography>Trabajaremos en conjunto hasta encontrar la mejor solución</Typography>
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
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>

    );
}
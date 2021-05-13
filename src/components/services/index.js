import React from 'react';
import { Typography } from '@material-ui/core';
import Card from '../cardService';


const Index = () => {

    return (
        <section style={{ background: '#D5FAFC', minheight: '80vh' }}>
            <Typography variant="h5" >
                Servicios
            </Typography>
            <div
                style={{ margin: '5vh 0vw', paddingBottom: '5vh' }}
            >
                <Card
                    maginLeft='25%'
                    width='65%'
                    title='Desarrollo web'
                    desc='Las tecnologías de desarrollo web con las que he trabajado son React.js, Node.js, Firebase, PHP, Mysql y mongonDB.'
                />
                <Card
                    maginLeft='5vw'
                    width='50vw'
                    title='Desarrollo movil'
                    desc='Las tecnologias de desarrollo movil con las que he trabajado son Kotlin para android 
                    y desarrollo multiplataforma con React Native.'
                />
                <Card
                    maginLeft='20%'
                    width='70vw'
                    title='Maquetación web'
                    desc='Tengo experiencia utilizando Figma.'
                />
            </div>
        </section>
    );
}
export default Index;
import app from '../img/app.svg';
import apptwo from '../img/apptwo.svg';
import appthree from '../img/appthree.svg';
import appfor from '../img/appfor.svg';
import appfive from '../img/appfive.svg';
import appsix from '../img/appsix.svg';

export const scrollTo=(el)=>{
    var element = document.getElementById(el);
    element.scrollIntoView();
}

export const listWorks = [
    {
        title: 'ELECTROCONTROL WEB',
        description: 'Pagina web para empresa electrocontrol',
        link: 'https://electrocontrolpuebla.web.app'
    },
    {
        title: 'ZTILUZ WEB APP',
        description: 'Aplicación web de agenda digital para comercios de belleza,integre suscripción de pagos en liena con mercado pago.',
        link: 'https://ztiluz.com'
    },
    {
        title: 'MINIVIAJES WEB APP',
        description: 'Desarrolle la pagina web de una agencia de viajes, integre pagos en liena con mercado pago',
        link: 'https://mini-viajes.web.app'
    },
    {
        title: 'ZTILUZ MOVIL APP',
        description: 'Maquetado de las vistas y programacion con Kotlin.',
        link: 'https://play.google.com/store/apps/details?id=com.mx.ztiluz&hl=es'
    },
    {
        title: 'ADMIN ZTILUZ WEB APP',
        description: 'Desarrolle un admin para gestionar los datos de la apliación(Actilizar tiendas, editarlas, estadisticas de usuarios, ect...)',
        link: '/'
    },
]

export const listGalery = [app,apptwo,appthree,appfor,appfive,appsix]
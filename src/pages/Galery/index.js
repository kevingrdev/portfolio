import ListImg from '../../components/ListImg'
import Typography from '@material-ui/core/Typography'
import { listGalery } from '../../const';

const Galery = ({ title }) => {
    return (
        <>
            <Typography variant='h4' color='secondary'>{title}</Typography>
            <ListImg jobs={listGalery} />
        </>
    )
}
export default Galery;
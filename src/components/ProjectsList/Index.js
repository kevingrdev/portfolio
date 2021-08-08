
import Typography from '@material-ui/core/Typography';

import { PORFOLIO_LIST } from '../../const/data';
import ItemProyect from '../ItemProject/Index';

import './styles.css';

export default function AlignItemsList() {
   
    return (
        <section
            id='jobPage'
            className='jobs'
        >
            <main>
                <Typography variant="h4" color="Primary">
                    Trabajos destacados
                </Typography>
                <div className="list-works">
                    {PORFOLIO_LIST.map((work) => (
                        <ItemProyect
                            href={work.href}
                            text={work.text}
                            img={work.img}
                            isprivate={work.isprivate?true:false}
                        />
                    ))}
                </div>
            </main>
        </section>
    );
}
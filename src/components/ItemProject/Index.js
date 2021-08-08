import useTheme from '../../Hooks/useTheme';
import Btn from '../Btn';
import './style.css';

export default function ItemProyect({
    href = '',
    text = {
        one: '',
        two: ''
    },
    img,
    isprivate = false
}) {
    const { STATUS_DARK } = useTheme();

    return (
        <>
            <div className={STATUS_DARK ? 'item-proyect--dark' : 'item-proyect'}>
                <div style={{ margin: 'auto' }}>
                    <img src={img} alt={text.one} width={200} height={200} />
                </div>
                <div className={STATUS_DARK ? 'content--dark' : 'content'}>
                    <div className='paragraphs'>
                        <p>{text.one}</p>
                        <p>{text.two}</p>
                    </div>

                    <a href={href} rel="noreferrer" target="_blank" style={{display:isprivate?'none':''}} >
                        <Btn
                            text={"Ver ahora"}
                            textColor={"#FF7272"}
                            colors={{
                                primary: STATUS_DARK ? 'rgb(1 49 87)' : '#fff',
                                secondary: STATUS_DARK ? '#011fc7' : '#fff',
                            }}
                            height="40px"
                            width="240px"
                        />
                    </a>

                </div>
            </div>

        </>
    )
}

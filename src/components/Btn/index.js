

import useTheme from '../../Hooks/useTheme';

import './style.css'

export default function Btn({
    text,
    colors = {
        primary: '#FF0C7F',
        secondary: '#20294F'
    },
    width = "auto",
    height = "auto",
    textColor = "whitesmoke"
}) {

    const {STATUS_DARK}=useTheme()

    const { primary, secondary } = colors;
    
    return (

        <div className={STATUS_DARK?"button-general--dark":"button-general"}
            style={{
                width: width,
                height: height,
                backgroundColor:'linea-gradient(to right,red,blue)',
                background: `linear-gradient( to right, ${primary}, ${secondary})`,
                
            }}
        >
            <p style={{color:textColor,}}>{text}</p>
        </div>

    )
}

import './styles.css';

const ListExperience = () => {
    const ItemList = ({ job, time }) => {
        return (
            <li className="item-experience">
                <img src='https://image.flaticon.com/icons/png/512/3176/3176388.png' alt="Work experience" width='40px' />
                <div>
                    <h2 className="title">{job}</h2>
                    <p className="paragraph"> {time}</p>
                </div>
            </li>
        )
    }

    return (
        <ul className="list-experiences" >
            <ItemList job="Full stack Junior" time="feb. de 2020 - mar. de 2021" />
            <ItemList job="Desarrollador Front end-Magno Technology" time="mar. de 2021 - actual" />
        </ul>
    )
}

export default ListExperience;
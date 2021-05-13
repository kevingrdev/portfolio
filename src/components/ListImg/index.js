import './style.css';

const ListImg = ({ jobs }) => {

    return (
        <>
            <section className='container-img' >
                {
                    jobs.map((job) => (<img key={job} src={job} className='img-item' alt={job} />))
                }
            </section>
        </>
    )
}
export default ListImg;

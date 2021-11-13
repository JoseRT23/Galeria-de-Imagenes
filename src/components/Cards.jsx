import CardPrincipal from './CardPrincipal'
import Loading from './Loading';
import Form from './Form';
import "../components/Cards.css"
import useApi from '../hooks/useApi';

const Cards = () => {
    const [images, isActive, handleSubmit] = useApi();

    return (
        <>
            <Form handleSubmit={handleSubmit} />

            {isActive && <Loading />}
            <div>

            <div className="imagesGrid">
                {images.map((img) => {
                return <div key={img.id} className="">
                            <CardPrincipal  img={img.urls.regular} download={img.links.download} name={`${img.user.first_name} ${img.user.last_name}`}/>
                        </div>
                })
                }
            </div>
            </div>
        </>
    )
}

export default Cards

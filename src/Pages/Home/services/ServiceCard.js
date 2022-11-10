import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, title, price, details } = service;
    // const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="px-10 pt-10">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    {
                        details?.length > 100 ?
                            <>{details.slice(0, 100) + '...'} <Link>Read more</Link> </>
                            :
                            <>{details}</>
                    }

                    <p>price:${price}</p>
                    <div className="card-actions">
                        <Link to={`/enroll/${_id}`}>
                            <button className="btn btn-primary">details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;


// to={`/news/${_id}`}
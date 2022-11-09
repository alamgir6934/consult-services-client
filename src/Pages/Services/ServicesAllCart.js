import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/services/ServiceCard';

const ServicesAllCart = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Our focuse Services</p>
                <h2 className='text-5xl font-semibold'>Start Your Overseas Education Journey with Global Assistant!</h2>
                <p>Thinking of starting a consulting job? There are countless types of consulting roles in dozens of different industries which, with the right experience, you could offer your expertise to!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard

                        key={service._id}
                        service={service}

                    ></ServiceCard>)
                }

            </div>




        </>
    );
};

export default ServicesAllCart;





// <Card.Text>
// {
//     details.length > 200 ?
//         <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read more</Link> </>
//         :
//         <>{details}</>
// }
// </Card.Text>
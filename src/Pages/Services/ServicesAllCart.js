import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/services/ServiceCard';

const ServicesAllCart = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://consult-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <>
            <div className='text-center'>
                <p className='lg:text-2xl font-bold text-orange-600'>Our focuse Services</p>
                <h2 className='lg:text-4xl font-semibold'>Start Your Overseas Education Journey with Global Assistant!</h2>
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





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://consult-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className='mt-10 w-full'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Our focuse Services</p>
                <h2 className='text-3xl font-semibold'>Start Your Overseas Education Journey with Global Assistant!</h2>
                <p>Thinking of starting a consulting job? There are countless types of consulting roles in dozens of different industries which, with the right experience, you could offer your expertise to!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.slice(0, 3).map(service => <ServiceCard

                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }

            </div>

            <div className='h-20 mx-auto'>
                <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded"><Link to='./service'>See All</Link></button>
            </div>


        </div>
    );
};

export default Services;
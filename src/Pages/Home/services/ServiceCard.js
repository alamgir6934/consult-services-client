import React, { useState } from 'react';

const ServiceCard = ({ service }) => {

    const { img, title, price } = service;
    // const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="px-10 pt-10">
                    <img src={img} alt="service" className="rounded-full" />
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
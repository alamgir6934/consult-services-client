import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Enrolled = () => {
    const { _id, img, title, price, details } = useLoaderData();
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p>Price:${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}>
                        <button className="btn btn-primary">Review now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Enrolled;
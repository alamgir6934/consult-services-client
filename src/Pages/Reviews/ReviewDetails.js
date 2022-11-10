import React, { useEffect, useState } from 'react';

const ReviewDetails = ({ review, handleDelete }) => {
    const { _id, serviceName, price, customer, phone, service, customerReview } = review;
    const [reviewService, setReviewService] = useState({});
    useEffect(() => {
        fetch(`https://consult-service-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [service])
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                reviewService?.img &&
                                <img src={reviewService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>{customerReview}</td>
            {/* <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th> */}
        </tr>
    );
};

export default ReviewDetails;
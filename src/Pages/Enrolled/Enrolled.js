import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Enrolled = () => {
    const { _id, img, title, price, details } = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <p>Price:${price}</p>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/review/${_id}`}>
                            <button className="btn btn-primary">Review now</button>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className=''>
                <form>
                    <h2 className="">You are about to write {title}</h2>
                    {/* <h4 className="">price:{price}</h4> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                        <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                        <input name='email' type="text" placeholder="Your email" className="input input-bordered w-full" readOnly />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your message" required></textarea>
                    <input className='btn' type='submit' value='Review now'></input>
                </form>
            </div>
        </div>
    );
};

export default Enrolled;
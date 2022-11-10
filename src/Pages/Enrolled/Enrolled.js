import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Enrolled = () => {
    const { _id, img, title, price, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const customerReview = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            customerReview,
            img
        }

        fetch('https://consult-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                // authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review added successfully')
                    form.reset();
                }


            })
            .catch(er => console.log(er))


    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Full details:{title}</h2>
                    <p>{details}</p>
                    <p className='text-orange-600 font-bold'>Price:${price}</p>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/review/${_id}`}>
                            <button className="btn btn-primary">Review now</button>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className=''>
                <form onSubmit={handlePlaceReview}>
                    <h2 className="">You are about to write {title}</h2>
                    {/* <h4 className="">price:{price}</h4> */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                        <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                        <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </div>
                    <textarea name='message' className="textarea textarea-bordered h-24 w-full" placeholder="Your review" required></textarea>
                    <input className='btn' type='submit' value='Review now'></input>
                </form>
            </div>
        </div>
    );
};

export default Enrolled;
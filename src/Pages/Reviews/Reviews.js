import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            // , {
            //     headers: {
            //         authorization: `Bearer ${localStorage.getItem('genius-token')}`
            //     }

            // })
            .then(res => res.json())
            .then(data => setReviews(data))

        // .then(res => {

        //     if (res.status === 401 || res.status === 403) {
        //         logOut()
        //     }
        //     return res.json()


        // })
        // .then(data => {
        //     // console.log('inside received', data)
        //     setReviews(data)

        // })

    }, [user?.email, reviews])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure to cancel the order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deleteCount > 0) {
                        alert('delete successfully');
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining);


                    }
                })

        }
    }

    return (

        <div>
            <h2 className="text-5xl">you have:{reviews.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>service</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewDetails
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                            //  handleStatusUpdate={handleStatusUpdate}
                            ></ReviewDetails>)
                        }
                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default Reviews;
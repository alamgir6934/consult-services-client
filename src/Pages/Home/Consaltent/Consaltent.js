import React from 'react';

const Consaltent = () => {
    return (
        <div className='mt-32'>

            <div className='text-center'>
                <h1 className='lg:text-3xl font-bold text-lg'>Our Consaltent</h1>
                <p>who always care our student</p>
            </div>
            <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/SmM4Mzb/close-up-father-teaching-kid-write-23-2148761575.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mental care consaltent</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/MBG7kmD/confident-african-speaker-business-coach-giving-presentation-team-1163-4620.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Business Consaltent</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
                <div>
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/r6SGk8C/everyone-is-smiling-listens-group-people-business-conference-modern-classroom-daytime-146671-16288.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Education Consaltent</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Consaltent;
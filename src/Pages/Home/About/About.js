import React from 'react';

const About = () => {
    return (
        <div>

            <div className="hero">
                <h1 className='text-center mb-96'>Student Care</h1>
                <div className="hero-content flex-col lg:flex-row mt-28">
                    <div className="relative h-96 carousel carousel-vertical rounded-box w-1/2">
                        <div className="carousel-item h-full">
                            <img alt='' src="https://i.ibb.co/c6PHm3R/classmates-looking-each-other-1098-2826.webp" />
                        </div>
                        <div className="carousel-item h-full">
                            <img alt='' src="https://i.ibb.co/chwN1g8/team-supporting-invalid-woman-23-2148476556.webp" />
                        </div>
                        <div className="carousel-item h-full">
                            <img alt='' src="https://i.ibb.co/JQdGkqm/male-female-graphic-designers-interacting-with-each-other-1170-2955.webp" />
                        </div>
                        <div className="carousel-item h-full">
                            <img alt='' src="https://i.ibb.co/PmRtQWy/man-holding-bunch-books-donate-them-23-2148687346.webp" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Our Approach</h1>
                        <p className="py-6">Each institution we work with unique.Depending on your goals,we can offer you one distinct service or design a <br />
                            custom bundle of serrvices. We tailor the approach <br />
                            or mix of approaches best suited to your university</p>
                        <button className="btn btn-primary">Get enrolled</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
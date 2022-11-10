import React from 'react';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img w-full'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-32 lg:left-96 lg:mt-36 top-1/4">
                <h1 className='text-3xl font-bold text-white'>
                    Secrets about tips <br />
                    Get control of your<br />
                    life for serious
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-32 lg:left-96 mt-44 lg:top-1/2">
                <button className="btn btn-active btn-primary mr-5">Button</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default BannerItem;
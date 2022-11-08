import React from 'react';
import './Banner.css'
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: 'https://i.ibb.co/f2HPf0D/240-F-440423057-5-UWr6-N1ufz-WP5djgqqih-NBjj-FLei6-DW1.jpg',
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: 'https://i.ibb.co/9NBwY7Z/240-F-309899013-RQqp59fqzl7-LKRLWjz-WWs4psl-Kq4v-Aw-D.jpg',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://i.ibb.co/Vp5rGzk/240-F-316912806-RCe-HVm-Ux5-Lu-BMi7-MKYTY5ark-E4-I0-Dcp-U.jpg',
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: 'https://i.ibb.co/Y0L36Nx/240-F-374847019-90dd-QTw0-Pefj-PXh-Wi-Wim-Bp-Z7-Zq5-EMC5-L.jpg',
        prev: 3,
        id: 4,
        next: 1
    },

]

const Banner = () => {
    return (
        <div className="carousel w-full">

            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;
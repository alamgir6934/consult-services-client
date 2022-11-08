import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/f2HPf0D/240-F-440423057-5-UWr6-N1ufz-WP5djgqqih-NBjj-FLei6-DW1.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/Vp5rGzk/240-F-316912806-RCe-HVm-Ux5-Lu-BMi7-MKYTY5ark-E4-I0-Dcp-U.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/Y0L36Nx/240-F-374847019-90dd-QTw0-Pefj-PXh-Wi-Wim-Bp-Z7-Zq5-EMC5-L.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/9NBwY7Z/240-F-309899013-RQqp59fqzl7-LKRLWjz-WWs4psl-Kq4v-Aw-D.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    );
};

export default Banner;
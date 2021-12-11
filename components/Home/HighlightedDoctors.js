import React from 'react';
import Slider from 'react-slick';
import HighlightedDoctorCard from '../Cards/HighlightedDoctorCard';


function HighlightedDoctors() {
    const settings = {
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 5,
        // slidesToScroll: 3,
        // className: "center",
        // centerMode: true,
        // arrows: false,
     autoplay: true,
	autoplaySpeed: 1000,


	dots: true,
	infinite: true,
	speed: 3000,
	slidesToShow: 1,
   slidesToScroll: 1,
    
    };
    return (
        <>
            <div className="container pt-5">
                <h4 className="text-center text-primary">Discover the doctors with the highest ratings</h4>
                <p className="text-center w-75 ms-auto me-auto">
                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                </p>


            </div>
            <div className="w-100">
                {/* doctor card slider */}
                <Slider {...settings}>
                    <div className="row">
                        
                        <div className="col-12 d-flex justify-content-center"> <HighlightedDoctorCard />
                            <HighlightedDoctorCard />
                            <HighlightedDoctorCard />
                         <HighlightedDoctorCard /></div>
                   </div>
                    <div className="row">
                        
                        <div className="col-12 d-flex justify-content-center"> <HighlightedDoctorCard />
                            <HighlightedDoctorCard />
                            <HighlightedDoctorCard />
                         <HighlightedDoctorCard /></div>
                   </div>
                   
                    </Slider>
                   
            </div>
        </>
    )
}

export default HighlightedDoctors

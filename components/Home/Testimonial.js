import React from 'react';
import Slider from 'react-slick';

function Testimonial() {
    const settings = {
       autoplay: true,
	autoplaySpeed: 1000,


	dots: true,
	infinite: true,
	speed: 3000,
	slidesToShow: 1,
   slidesToScroll: 1,
    };
    return (
        <div className="testimonialWrapper">
            <div className="container">
                <div className="row  p-4">
                    <div className="col-md-3 p-3">
                        <h4>You are in good hands!</h4>
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <div className="col-md-9 p-3">
                        <Slider {...settings}>
                            <div className="row">
                                
                                <div className="col d-flex">
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                </div>
</div>
                            <div className="row">
                                
                                <div className="col d-flex">
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                </div>
</div>
                            <div className="row">
                                
                                <div className="col d-flex">
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                                                <div className="card p-3 m-3 testimonialCard " >
            <p className="qoute"><i className="fas fa-quote-left"></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                                </p>
                                <h5>
                                    Sahariar Shafin
                                </h5>
                                <p>
                                    Martketer
                                </p>
                            </div>
                                </div>
</div>
                           
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

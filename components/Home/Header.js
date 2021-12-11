import Image from 'next/image';
import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaSearchLocation, FaUserClock } from 'react-icons/fa';

function Header() {
    return (
        <div className="bg-img">
            <h1 className="text-light text-center  mb-4 fw-bold headLine">Find elite medical specialists near you!</h1>
            <p className="text-light text-center mb-4">
                Read verified reviews and book your FREE medical appointment online.
            </p>

            <div className="container ps-5 pe-5">
                <div className="p-1 bg-light rounded shadow-sm mb-4 border-search">
                    <div className="input-group">
                        <div className="input-group-append">
                            <button className="btn">
                               <FaUserClock color="#00cacd"/>
                            </button>
                        </div>
                        <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                        <div className="input-group-append">
                            <button className="btn">
                             <FaSearchLocation color="#00cacd"/>
                            </button>
                        </div>
                        <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                        <div className="input-group-append">
                            <button className="btn">
                              <AiOutlineFileSearch color="#00cacd"/>
                            </button>
                        </div>
                        <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                        <div className="input-group-append">
                            <button id="button-addon1" type="submit" className="btn btn-search">
                                <i className="fa fa-search pe-3"></i>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-light text-center">
                Top searched specialties
            </p>

            <div className="container">
                <div className="d-flex justify-content-evenly flex-wrap">
                    <div className="text-light text-center">
                        <Image src="/cardiologist.svg" width={50} height={50} />
                        <h5>Cardiologists</h5>
                    </div>
                    <div className="text-light text-center">
                        <Image src="/dentist.svg" width={50} height={50} />
                        <h5>Dentists</h5>
                    </div>
                    <div className="text-light text-center">
                        <Image src="/general.svg" width={50} height={50} />
                        <h5>General MD</h5>
                    </div>
                    <div className="text-light text-center">
                        <Image src="/hematologist.svg" width={50} height={50} />
                        <h5>Hematologists</h5>
                    </div>
                    <div className="text-light text-center">
                        <Image src="/microbiologist.svg" width={50} height={50} />
                        <h5>Microbiologists</h5>
                    </div>
                    <div className="text-light text-center">
                        <Image src="/orthopedist.svg" width={50} height={50} />
                        <h5>Orthopedists</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

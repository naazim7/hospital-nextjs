import Image from 'next/image';
import React from 'react';
import { FaGlobeAmericas, FaUserAlt } from 'react-icons/fa';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <Image src="/logo.svg" width={100} height={50} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{`Clinics &  Hospitals`}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Medical Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                        </li>
                    </ul>
                    <div className="d-flex navbar-nav border-left">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><FaUserAlt color="steelblue"/> Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><FaGlobeAmericas color="steelblue"/> GR</a>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

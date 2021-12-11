import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaSearchLocation } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import RatingPreview from '../RatingPreview';

function HighlightedDoctorCard() {
    return (
        <div className="card m-2" style={{ width: "22em" }}>
            <div className="d-flex p-2 ">
                <div className="m-1">
                    <Image
                        src="https://images.unsplash.com/photo-1638914962352-3bdfa3cd1f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        width={100}
                        height={100}
                        className="rounded-circle"
                    />
                </div>
                <div className="pt-3">
                    <h6>Παπαχριστοδούλου
                        Βασιλική</h6>
                    <p>Ελευθερίου Βενιζέλου 113,  Αθήνα </p>

                    <RatingPreview starsCount={5} text={5} />
                   
                </div>
            </div>
            <div className="card-footer bg-white text-muted p-2 ">
                <div className="row">
                    <div className="col-8 primary fw-bold">2 Days Ago</div>
                    <div className="col-4 border-left"><FaEnvelope className="ms-2 fw-bold"/> <GoLocation className="ms-1 fw-bold"/> <FaSearchLocation className="ms-1"/></div>
              </div>
            </div>
        </div>
    )
}

export default HighlightedDoctorCard;

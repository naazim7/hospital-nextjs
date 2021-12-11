import Image from 'next/image'
import React from 'react'

function Stepper() {
    return (
        <div>
            <div className="container d-flex flex-wrap justify-content-evenly stepper">
                <div className="card p-1" style={{ width: "22rem" }}>
                    <div className="text-center pt-3">
                        <Image src="/Layer 11.png" width={100} height={100} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-text fw-bold ">
                            1. Search for a doctor
                        </h5>
                        <p className="card-text">
                            Use the filters to find a doctor of the specialty you need in your area, specialising in what concerns you.                        </p>
                    </div>
                </div>
                <div className="card p-1" style={{ width: "22rem" }}>
                    <div className="text-center pt-3">
                        <Image src="/Layer 12.png" width={100} height={100} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-text fw-bold">
                            {`2. View the doctor's profile`}
                        </h5>
                        <p className="card-text">
                            Read verified reviews from other patients, details of their experience and the cost of the services they
                            offer.
                        </p>
                    </div>
                </div>
                <div className="card p-1" style={{ width: "22rem" }}>
                    <div className="text-center pt-3">
                        <Image src="/Layer 13.png" width={100} height={100} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-text fw-bold">
                            3. Book a Free Appointment
                        </h5>
                        <p className="card-text">
                            View their availability,  fill in your contact details, the reason of your visit and you’re ready to book your Free appointment!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stepper

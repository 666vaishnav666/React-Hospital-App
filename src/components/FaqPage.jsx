import React from 'react'
import { Navigate } from 'react-router-dom'
import Navbar from './Navbar'

const FaqPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <Navbar />
                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Where is John Hopkins medicine?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Where is John Hopkins medicine?</strong> <br />Headquartered in Baltimore, Maryland, on the East Coast of the United States, Johns Hopkins Medicine unites the physicians and scientists of the Johns Hopkins University School of Medicine with the organizations, health professionals and facilities of The Johns Hopkins Hospital and the Johns Hopkins Health System. Johns Hopkins Medicine has six academic and community hospitals, four suburban health care and surgery centers, over 40 other patient care locations, a home care group and an international division. They offer an array of health care services in Maryland, Washington, D.C., and Tampa, Florida. View our patient care locations and get directions.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Where is John Hopkins Medicine International?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>Where is John Hopkins Medicine International?</strong> <br />The international division of Johns Hopkins Medicine coordinates care for international patients traveling to the United States for complex medical care. It also provides consulting services to improve health and health care delivery around the world.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What resources are available to help me navigate to the hospital?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <strong>What resources are available to help me navigate to the hospital?</strong> <br />The Johns Hopkins Find Your Way app will help you get to and around the buildings of  The Johns Hopkins Hospital and Johns Hopkins Bayview Medical Center in Baltimore, Maryland. This free app will help you:
                                            Get step-by-step directions to appointments.
                                            Locate and save your parking spot.
                                            Find amenities and services along your way.
                                            Search for a physician or provider.
                                            Access MyChart.
                                            This app is available on the Apple App Store for iOS devices and the Google Play Store for Android devices.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage

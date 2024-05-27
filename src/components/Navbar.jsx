import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <nav class="navbar navbar-expand-lg bg-body-success">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">Home</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/about">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/service">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contact">Contact Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/faq">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

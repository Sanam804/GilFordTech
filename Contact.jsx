import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
   <>
    {/* <!-- Page Header Start --> */}
        <div className="container-fluid page-header py-5">
            <div className="container text-center py-5">
                <h1 className="display-2 text-white mb-4 animated slideInDown">Contact Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="/pages">Pages</Link></li>
                        <li className="breadcrumb-item" aria-current="page">Contact</li>
                    </ol>
                </nav>
            </div>
        </div>
        {/* <!-- Page Header End --> */}


        {/* <!-- Fact Start --> */}
        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">199</h1>
                            <h5 className="text-white mt-1">Success in getting happy customer</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">125</h1>
                            <h5 className="text-white mt-1">Thousands of successful business</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">220</h1>
                            <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">50</h1>
                            <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Fact End --> */}


        {/* <!-- Contact Start --> */}
        <div className="container-fluid py-5 mt-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Get In Touch</h5>
                    <h1 className="mb-3">Contact for any query</h1>
                    <p className="mb-2">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                </div>
                <div className="contact-detail position-relative p-5">
                    <div className="row g-5 mb-5 justify-content-center">
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: "64px" ,height: "64px"}}>
                                    <i className="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Address</h4>
                                    <Link to="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5">New Ashok Nagar,Delhi</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: "64px", height: "64px"}}>
                                    <i className="fa fa-phone text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Call Us</h4>
                                    <Link className="h5" to="tel:+0123456789" target="_blank">+01632252550</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: "64px",height: "64px"}}>
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Email Us</h4>
                                    <Link className="h5" to="mailto:sanam@gmail.com" target="_blank">sanam@gmail
                                    .com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="p-5 h-100 rounded contact-map">
                                <iframe className="rounded w-100 h-100" src="https://maps.google.com/maps?q=C/47A,%20Subhash%20Park,%20Block%20C,%20New%20Ashok%20Nagar,%20New%20Delhi,%20Delhi,%20110096,%20India&t=&z=17&ie=UTF8&iwloc=&output=embed" style={{border:"0" ,allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                            <div className="p-5 rounded contact-form">
                                <div className="mb-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Your Name"/>
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control border-0 py-3" placeholder="Your Email"/>
                                </div>
                                <div className="mb-4">
                                    <input type="text" className="form-control border-0 py-3" placeholder="Project"/>
                                </div>
                                <div className="mb-4">
                                    <textarea className="w-100 form-control border-0 py-3" rows="6" cols="10" placeholder="Message"></textarea>
                                </div>
                                <div className="text-start">
                                    <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        {/* <!-- Contact End --> */}
   </>
  )
}

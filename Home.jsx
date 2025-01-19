import React from 'react'
import { Link } from 'react-router-dom'
// import Testimonial from './Testimonial'
export default function Home() {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid px-0">
            <div id="carouselId" className="carousel slide pointer-event" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-label="First slide" aria-current="true"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide" className=""></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="img/carousel-1.jpg" className="img-fluid" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                <Link to="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></Link>
                                <Link to="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carousel-2.jpg" className="img-fluid" alt="Second slide"/>
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h6 className="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 className="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                                <p className="mb-4 text-white fs-5 animated fadeInDown">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
                                <a href="" className="me-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                <a href="" className="ms-2"><button type="button" className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* <!-- Carousel End --> */}


        {/* <!-- Fact Start --> */}
        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">99</h1>
                            <h5 className="text-white mt-1">Success in getting happy customer</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">25</h1>
                            <h5 className="text-white mt-1">Thousands of successful business</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">120</h1>
                            <h5 className="text-white mt-1">Total clients who love HighTech</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
                        <div className="d-flex counter">
                            <h1 className="me-3 text-primary counter-value">5</h1>
                            <h5 className="text-white mt-1">Stars reviews given by satisfied clients</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Fact End --> */}


        {/* <!-- About Start --> */}
        <div className="container-fluid py-5 my-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                        <div className="h-100 position-relative">
                            <img src="img/about-1.jpg" className="img-fluid w-75 rounded" alt="" style={{marginBottom: "25%"}}/>
                            <div className="position-absolute w-75" style={{top: '25%' , left: '25%'}}>
                                <img src="img/about-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                        <h5 className="text-primary">About Us</h5>
                        <h1 className="mb-4">About HighTech Agency And It's Innovative IT Solutions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.</p>
                        <p className="mb-4">Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.</p>
                        <Link to="" className="btn btn-secondary rounded-pill px-5 py-3 text-white">More Details</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Services Start --> */}
        <div className="container-fluid services py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Services</h5>
                    <h1>Services Built Specifically For Your Business</h1>
                </div>
                <div className="row g-5 services-inner">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Design</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-file-code fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Development</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-external-link-alt fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">UI/UX Design</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Cecurity</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Digital Marketing</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Programming</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt.</p>
                                    <Link to="" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Services End --> */}


        {/* <!-- Project Start --> */}
        <div className="container-fluid project py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Project</h5>
                    <h1>Our Recently Completed Projects</h1>
                </div>
                <div className="row g-5">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s" style={{visibility: 'visible', animation:'delay 0.3s' ,animationname: "fadeIn"}}>
                        <div className="project-item">
                            <div className="project-img">
                                <img src="img/project-1.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <Link to="#" className="text-center">
                                        <h4 className="text-secondary">Web design</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s" style={{visibility: 'visible', animation:'delay 0.3s' ,animationname: "fadeIn"}}>
                        <div className="project-item">
                            <div className="project-img">
                                <img src="img/project-2.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <Link to="#" className="text-center">
                                        <h4 className="text-secondary">Cyber Security</h4>
                                        <p className="m-0 text-white">Cyber Security Core</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s" style={{visibility: 'visible', animation:'delay 0.3s' ,animationname: "fadeIn"}}>
                        <div className="project-item">
                            <div className="project-img">
                                <img src="img/project-3.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <Link to="#" className="text-center">
                                        <h4 className="text-secondary">Mobile Info</h4>
                                        <p className="m-0 text-white">Upcomming Phone</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s" style={{visibility: 'visible', animation:'delay 0.3s' ,animationname: "fadeIn"}}>
                        <div className="project-item">
                            <div className="project-img">
                                <img src="img/project-4.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <Link to="#" className="text-center">
                                        <h4 className="text-secondary">Web Development</h4>
                                        <p className="m-0 text-white">Web Analysis</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s" style={{visibility: 'visible', animation:'delay 0.3s' ,animationname: "fadeIn"}}>
                        <div className="project-item">
                            <div className="project-img">
                                <img src="img/project-5.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <Link to="#" className="text-center">
                                        <h4 className="text-secondary">Digital Marketing</h4>
                                        <p className="m-0 text-white">Marketing Analysis</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s" style={{visibility: 'visible', animation:'delay 0.3s' ,animationname: "fadeIn"}}>
                        <div className="project-item">
                            <div className="project-img">
                                <img src="img/project-6.jpg" className="img-fluid w-100 rounded" alt=""/>
                                <div className="project-content">
                                    <Link to="#" className="text-center">
                                        <h4 className="text-secondary">keyword Research</h4>
                                        <p className="m-0 text-white">keyword Analysis</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
        
        {/* <!-- Project End --> */}


        {/* <!-- Blog Start --> */}
        <div className="container-fluid blog py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Our Blog</h5>
                    <h1>Latest Blog & News</h1>
                </div>
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="blog-item position-relative bg-light rounded">
                            <img src="img/blog-1.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px', right: '20px'}}>Web Design</span>
                            <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{marginTop: "-75px"}}>
                                <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                    <Link to="" className="btn text-white">Read More</Link>
                                </div>
                                <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                    <div className="blog-icon-1">
                                        <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                    </div>
                                    <div className="blog-icon-2">
                                        <Link to="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></Link>
                                        <Link to="" className="btn me-1"><i className="fab fa-twitter text-white"></i></Link>
                                        <Link to="" className="btn me-1"><i className="fab fa-instagram text-white"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-center position-relative px-3" style={{marginTop: "-25px"}}>
                                <img src="img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt=""/>
                                <h5 className="">By Daniel Martin</h5>
                                <span className="text-secondary">24 March 2023</span>
                                <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <Link to="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></Link>
                                <Link to="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="blog-item position-relative bg-light rounded">
                            <img src="img/blog-2.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px', right: '20px'}}>Development</span>
                            <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{marginTop: "-75px"}}>
                                <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                    <Link to="" className="btn text-white ">Read More</Link>
                                </div>
                                <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                    <div className="blog-icon-1">
                                        <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                    </div>
                                    <div className="blog-icon-2">
                                        <Link to="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></Link>
                                        <Link to="" className="btn me-1"><i className="fab fa-twitter text-white"></i></Link>
                                        <Link to="" className="btn me-1"><i className="fab fa-instagram text-white"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-center position-relative px-3" style={{marginTop: "-25px"}}>
                                <img src="img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt=""/>
                                <h5 className="">By Daniel Martin</h5>
                                <span className="text-secondary">23 April 2023</span>
                                <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div className="blog-coment d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <Link to="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></Link>
                                <Link to="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="blog-item position-relative bg-light rounded">
                            <img src="img/blog-3.jpg" className="img-fluid w-100 rounded-top" alt=""/>
                            <span className="position-absolute px-4 py-3 bg-primary text-white rounded" style={{top: '-28px' , right: '20px'}}>Mobile App</span>
                            <div className="blog-btn d-flex justify-content-between position-relative px-3" style={{marginTop: "-75px"}}>
                                <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
                                    <Link to="" className="btn text-white ">Read More</Link>
                                </div>
                                <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill ">
                                    <div className="blog-icon-1">
                                        <p className="text-white px-2">Share<i className="fa fa-arrow-right ms-3"></i></p>
                                    </div>
                                    <div className="blog-icon-2">
                                        <Link to="" className="btn me-1"><i className="fab fa-facebook-f text-white"></i></Link>
                                        <Link to="" className="btn me-1"><i className="fab fa-twitter text-white"></i></Link>
                                        <Link to="" className="btn me-1"><i className="fab fa-instagram text-white"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content text-center position-relative px-3" style={{marginTop: "-25px"}}>
                                <img src="img/admin.jpg" className="img-fluid rounded-circle border border-4 border-white mb-3" alt=""/>
                                <h5 className="">By Daniel Martin</h5>
                                <span className="text-secondary">30 jan 2023</span>
                                <p className="py-2">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt libero sit amet</p>
                            </div>
                            <div className="blog-coments d-flex justify-content-between px-4 py-2 border bg-primary rounded-bottom">
                                <Link to="" className="text-white"><small><i className="fas fa-share me-2 text-secondary"></i>5324 Share</small></Link>
                                <Link to="" className="text-white"><small><i className="fa fa-comments me-2 text-secondary"></i>5 Comments</small></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}


         {/* <!-- Team Start --> */}
                           
        <div className="container-fluid py-5 mb-5 team">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px", visibility: "visible" ,animation: "delay 0.3s", animationname: "fadeIn"}}>
                    <h5 className="text-primary">Our Team</h5>
                    <h1>Meet our expert Team</h1>
                </div>
                <div className="owl-carousel team-carousel wow fadeIn owl-loaded owl-drag" data-wow-delay=".5s" style={{visibility: "visible", animation: "delay 0.5s" ,animationname: "fadeIn"}}>
                    
                    
                    
                    
                <div className="owl-stage-outer"><div className="owl-stage" style={{transform: "translate3d(-2332px, 0px, 0px)", transition: "all 1s ease 0s", width: "3887px"}}><div className="owl-item cloned" style={{width: "338.667px", marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item active" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned active" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned active" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: "338.667px" ,marginRight: "50px"}}><div className="rounded team-item">
                        <div className="team-content">
                            <div className="team-img-icon">
                                <div className="team-img rounded-circle">
                                    <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt=""/>
                                </div>
                                <div className="team-name text-center py-3">
                                    <h4 className="">Full Name</h4>
                                    <p className="m-0">Designation</p>
                                </div>
                                <div className="team-icon d-flex justify-content-center pb-4">
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-instagram"></i></Link>
                                    <Link className="btn btn-square btn-secondary text-white rounded-circle m-1" to=""><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div></div></div></div><div className="owl-nav"><div className="owl-prev"><i className="bi bi-arrow-left"></i></div><div className="owl-next"><i className="bi bi-arrow-right"></i></div></div><div className="owl-dots disabled"></div></div>
            </div>
        </div>
         {/* <!-- Team End --> */}

        {/* <Testimonial/> */}

        {/* <!-- Contact Start --> */}
        <div className="container-fluid py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: "600px"}}>
                    <h5 className="text-primary">Get In Touch</h5>
                    <h1 className="mb-3">Contact for any query</h1>
                    <p className="mb-2">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <Link to="https://htmlcodex.com/contact-form">Download Now</Link>.</p>
                </div>
                <div className="contact-detail position-relative p-5">
                    <div className="row g-5 mb-5 justify-content-center">
                        <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                            <div className="d-flex bg-light p-3 rounded">
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
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
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
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
                                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle" style={{width: '64px', height: '64px'}}>
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <h4 className="text-primary">Email Us</h4>
                                    <Link className="h5" to="mailto:sanam@gmail.com.com" target="_blank">sanam@gmail.com</Link>
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
        </div>
        {/* <!-- Contact End --> */}
    </>
  )
}

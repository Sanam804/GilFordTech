import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    function logout(){
        localStorage.clear()
    }
  return (
  <>
    {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Topbar Start --> */}
        <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        <small className="me-3 text-white-50"><Link to="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></Link>New Ashok Nagar,Delhi</small>
                        <small className="me-3 text-white-50"><i className="fas fa-envelope me-2 text-secondary"></i><a href='mailto:sanam@gmail.com'> sanam@gmail.com </a></small>
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></Link>
                        <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></Link>
                        <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></Link>
                        <Link to="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}

        {/* <!-- Navbar Start --> */}
        <div className="container-fluid bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <Link to="index.html" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">GilFord<span className="text-secondary">Tech</span> </h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <Link to="/" className="nav-item nav-link active text-secondary">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/service" className="nav-item nav-link">Services</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact us</Link>
                            <Link to="/admin" className="nav-item nav-link">Admin</Link>

                            {
                                localStorage.getItem("login")?
                                <Link to ="" className='btn btn-primary p-3'>
                                <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mr.X<small className="fa fa-user text-body"></small></a>
                        <div className="dropdown-menu fade-up m-0">
                            <Link to="/profile" className="dropdown-item">Profile</Link>
                            <Link to="/cart" className="dropdown-item">Cart</Link>
                            <Link to="/checkout" className="dropdown-item">Checkout</Link>
                            <button className="btn btn-primary" onClick={logout}>Logout</button>
                        </div>
                    </div>
                    </Link>:
                    <Link to="/login" className='btn mt-3'>Login <small className="fa fa-user text-body"></small></Link>
                            }

                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <Link to="" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: '-7px', left: '20px'}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call: + 01632252550</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <Link to="#"><i className="bi bi-search text-white fa-2x"></i> </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- Navbar End --> */}
  </>
  )
}

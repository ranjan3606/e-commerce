import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='text-white border-bottom top-navbar fixed-top'>
                <nav className="navbar navbar-expand-lg container">
                    <Link className="navbar-brand" to="/product">
                        <img src='https://images.bewakoof.com/web/bewakoof-primary-logo-white-bg-2x-1635745564.png' className='logo' alt='' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/women">Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/other">Mobile Cover</Link>
                            </li>
                        </ul>

                        <ul class="navbar-nav ms-auto">
                            <form class="form-inline m-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='text-white d-none d-lg-block d-sm-none mt-5'>
                <nav className=" navbar-expand-lg">
                    <ul className="navbar-nav center_element" >
                        <li className="nav-item active">
                            <Link className="nav-link" to="/men">Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/women">Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/other">Mobile Cover</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Navbar
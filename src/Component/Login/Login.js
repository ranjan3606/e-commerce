import React from 'react'
import './Login.css'
import LoginSideImage from '../../assets/side.webp'

function Login() {
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3>Welcome to the world of bewakoof!</h3>
                        <img src={LoginSideImage} className="img-fluid sideImg" alt="" />
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h3 className='text-center'>Log In / Sign up</h3>
                        <h5 className='text-muted mb-5'>for Latest trends, exciting offers and everything Bewakoof!</h5>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control form" aria-describedby="emailHelp" placeholder="Enter Mobile Number" />
                            </div>
                            <button type="button" class="btn btn-secondary btn-lg mt-2">Login</button>
                        </form>
                        <div className='text-center mt-5'>
                            <hr />
                            <p className='text-center or'>OR</p>
                        </div>

                        <button className='btn text-primary border-dark bg-light'>CONTINUE WITH EMAIL</button>
                        <div className='text-center'>
                            <div className='row mt-4'>
                                <div className='col-md-6'>
                                    <button className=' btn text-primary border-dark bg-light'>Google</button>
                                </div>
                                <div className='col-md-6'>
                                    <button className=' btn text-primary border-dark bg-light'>Facebook</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
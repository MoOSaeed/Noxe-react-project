import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.scss'


export default function Navbar({ userData, logout }) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${styles.bgNavbar}`} >
                <div className="container">
                    <Link className="navbar-brand" href="#">Noxe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {userData ? <ul className="navbar-nav ms-5 me-auto mb-2 mb-lg-0">
                            <li className="nav-item text">
                                <Link className="nav-link navbar-brand active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='Movise'>Movise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='Tvshows'>Tv shows</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='People'>People</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='' Networks>Networks</Link>
                            </li>
                        </ul> : ''}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <div className='socail-icons me-4 d-flex align-items-center '>

                                <i id={styles.icons} className='fab mx-2 fa-facebook'></i>
                                <i id={styles.icons} className='fab mx-2 fa-spotify'></i>
                                <i id={styles.icons} className='fab mx-2 fa-instagram'></i>
                                <i id={styles.icons} className='fab mx-2 fa-youtube'></i>

                            </div>
                            {userData ? <li className="nav-item">
                                <div className='d-flex allign-items-center'>
                                    <Link to='Profile' className='nav-link me-2'>Hello:{userData.first_name}</Link>
                                    <Link className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
                                </div>
                            </li> : <>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='Login'>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='Register'>Register</Link>
                                </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'
import show from '../assests/book_admin.png'

function Admin() {




    return (
        <>

            <div style={{ height: '500px' }}>
                <div className='row'>
                    <div className='col-2'>

                        <div style={{ backgroundColor: 'beige', height: '500px', width: '200px' }}>
                            <div>
                                <i className="fa-solid fa-circle-plus fa-sm ms-3" style={{ color: '#000000' }}></i>
                                <Link to='/addbook'>
                                    <button className='btn btn-outline-none' style={{ color: 'black' }} >Add Book</button>
                                </Link>
                            </div>
                            <div>
                                <i className="fa-solid fa-pen fa-sm ms-3" style={{ color: '#000000' }}></i>
                                <Link to='/viewbook'>
                                    <button className='btn btn-outline-none' style={{ color: 'black' }}>View Book</button>

                                </Link>

                            </div>
                            <div>
                                <i className="fa-solid fa-list-ul fa-sm ms-3" style={{ color: '#000000' }}></i>
                                <Link to='/studentlist'>
                                    <button className='btn btn-outline-none' style={{ color: 'black' }}>Student List</button>
                                </Link>
                            </div>
                            <div>
                                <i className="fa-solid fa-book-journal-whills fa-sm ms-3" style={{ color: '#000000' }}></i>
                                <Link to ='/bookinglist'>
                                <button className='btn btn-outline-none' style={{ color: 'black' }}>Booking List</button><br />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className='col-10'>
                        <div className='mt-4  text-center'>
                        <i className="fa-brands fa-galactic-senate fa-2xl" style={{color: '#331805'}}></i><br />
                        </div>
                        <h3 className='mt-2 text-center' style={{color:'green'}}>Welcome Admin</h3>
                        <div style={{paddingLeft:'165px'}}>
                            <img src={show} alt="" style={{width:'700px',height:'350px'}} className='img-fluid'/>
                        </div>

                    </div> */}

                </div>

            </div>



        </>
    )
}

export default Admin
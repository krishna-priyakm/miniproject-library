import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Admin() {




    return (
        // <>

        //     <div style={{ height: '500px' }}>
        //         <div className='row'>
        //             <div className='col-2'>

        //                 <div style={{ backgroundColor: 'beige', height: '500px', width: '200px' }}>
        //                     <div>
        //                         <i className="fa-solid fa-circle-plus fa-sm ms-3" style={{ color: '#000000' }}></i>
        //                         <Link to='/addbook'>
        //                             <button className='btn btn-outline-none' style={{ color: 'black' }} >Add Book</button>
        //                         </Link>
        //                     </div>
        //                     <div>
        //                         <i className="fa-solid fa-pen fa-sm ms-3" style={{ color: '#000000' }}></i>
        //                         <Link to='/viewbook'>
        //                             <button className='btn btn-outline-none' style={{ color: 'black' }}>View Book</button>

        //                         </Link>

        //                     </div>
        //                     <div>
        //                         <i className="fa-solid fa-list-ul fa-sm ms-3" style={{ color: '#000000' }}></i>
        //                         <Link to='/studentlist'>
        //                             <button className='btn btn-outline-none' style={{ color: 'black' }}>Student List</button>
        //                         </Link>
        //                     </div>
        //                     <div>
        //                         <i className="fa-solid fa-book-journal-whills fa-sm ms-3" style={{ color: '#000000' }}></i>
        //                         <Link to ='/bookinglist'>
        //                         <button className='btn btn-outline-none' style={{ color: 'black' }}>Booking List</button><br />
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* <div className='col-10'>
        //                 <div className='mt-4  text-center'>
        //                 <i className="fa-brands fa-galactic-senate fa-2xl" style={{color: '#331805'}}></i><br />
        //                 </div>
        //                 <h3 className='mt-2 text-center' style={{color:'green'}}>Welcome Admin</h3>
        //                 <div style={{paddingLeft:'165px'}}>
        //                     <img src={show} alt="" style={{width:'700px',height:'350px'}} className='img-fluid'/>
        //                 </div>

        //             </div> */}

        //         </div>

        //     </div>



        // </>


        <>
<Navbar expand="lg" className="bg-body-tertiary border shadow">
      <Container>
        <Navbar.Brand href="#home">Welcome Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">
                <Link to='/addbook' className=' text-decoration-none fw-bold' style={{color:'brown'}} >Add Book</Link>
                </Nav.Link>
            <Nav.Link href="">
                <Link to ='/viewbook' className='text-decoration-none fw-bold' style={{color:'brown'}}>View book</Link>
                </Nav.Link>
            <Nav.Link href="">
                <Link to='/studentlist' className='text-decoration-none fw-bold' style={{color:'brown'}}>Student List</Link>
                </Nav.Link>
            <Nav.Link href="">
                <Link to='/bookinglist' className='text-decoration-none fw-bold' style={{color:'brown'}}>Booking List</Link>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Admin
import React from 'react'

function Footer() {
  return (
    <div style={{ height: '404px', backgroundColor: 'lightblue', marginBottom: '0px' }}>
      <div>
        <h3 style={{ color: 'green' }}>Central Perk library</h3>
        <div class="row mt-4 mx-4 " >
          <div class="col-7 mb-3 order-first">
            <h5 style={{ color: 'brown' }} className='ps-3 pe-3'>About Us</h5>
            <p style={{ color: 'black',fontSize:'16px' }} className='ps-3 pe-3'>Central Perk Library is an e-book website where you can access all kind of books. Central Perk offers a unique atmosphere and an extensive book collections. It is accessible for use by its members.</p>

          </div>

          <div class="col-3 mb-3">
            <h5 style={{ color: 'brown' }}>Links</h5>
            <a href="" style={{ color: 'black',fontSize:'15px' }}>Home</a><br />
            <a href="" style={{ color: 'black',fontSize:'15px' }}>User Dashboard</a>
          </div>

          <div className='col-2 mb-3 order-last'>
            <h5 style={{ color: 'brown' }}>Reference</h5>
            <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: 'black',fontSize:'15px' }} >HTML examples</a><br />
            <a href="https://www.w3schools.com/Css/" style={{ textDecoration: 'none', color: 'black',fontSize:'15px' }}>CSS examples</a><br />
            <a href="https://getbootstrap.com/" style={{ textDecoration: 'none', color: 'black',fontSize:'15px' }}>Bootstrap examples</a><br />
            <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'black',fontSize:'15px' }}>React examples</a><br />
          </div>

        </div>
        <p className='text-center mt-5' style={{ color: 'black' }}>Copyright © 2024 Central Perk. Built with Docusaurus.</p>
      </div>
    </div>

  )
}

export default Footer
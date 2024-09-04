import React from 'react'

function Footer() {
  return (
    <div style={{ height: '330px', backgroundColor: 'lightblue', marginBottom: '0px' }}>
      <div>
        <h3 style={{ color: 'green' }}>Central Perk library</h3>
        <div class="row mt-4 mx-4">
          <div class="col order-first">
            <h5 style={{ color: 'brown' }}>About Us</h5>
            <span style={{ color: 'black' }}>Central Perk Library is an e-book website where you can access all kind of books. Central Perk offers a unique atmosphere and an extensive book collections. It is accessible for use by its members.</span>
          </div>

          <div class="col">
            <h5 style={{ color: 'brown' }}>Links</h5>
            <a href="" style={{ color: 'black' }}>Home</a><br />
            <a href="" style={{ color: 'black' }}>User Dashboard</a>
          </div>

          <div className='col'>
            <h5 style={{ color: 'brown' }}>Reference</h5>
            <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none', color: 'black' }} >HTML examples</a><br />
            <a href="https://www.w3schools.com/Css/" style={{ textDecoration: 'none', color: 'black' }}>CSS examples</a><br />
            <a href="https://getbootstrap.com/" style={{ textDecoration: 'none', color: 'black' }}>Bootstrap examples</a><br />
            <a href="https://react-bootstrap.github.io/" style={{ textDecoration: 'none', color: 'black' }}>React examples</a><br />
          </div>

          <div class="col order-last">
          <h5 style={{ color: 'brown' }}>Contact Us</h5>
          <div className='d-flex justify-content-center ' >
            <div className='text-center border shadow' style={{height:'185px',width:'290px'}}>
              <table className='table mt-2'>
                <tr>
                  <td><input type="email" className='form-control' placeholder='Email' /></td>
                </tr>
                <tr>
                  <td><input type="text" className='form-control mt-1' placeholder='Message' style={{height:'70px'}}/></td>
                </tr>
              </table>
              <button className='btn btn-dark '>Submit</button>

            </div>

          </div>

        </div>
        </div>
        <p className='text-center mt-2' style={{color:'black'}}>Copyright © 2024 Central Perk. Built with Docusaurus.</p>
      </div>
    </div>

  )
}

export default Footer
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/central perk.jpg'
import { registerApi } from '../Services/allApis'
import { toast } from 'react-toastify'
import { Row, Col } from 'react-bootstrap'



function Register() {

  const [reg, setReg] = useState({
    name: "", age: "", phone: "", gender: "", address: "", email: "", password: ""
  })
  console.log(reg)

  const [focus, setFocus] = useState({
    errName: false,
    errPh: false,
    errEm: false,
    errPassword: false
  })

  const handleregister = async () => {
    if (!reg.name || !reg.age || !reg.phone || !reg.gender || !reg.address || !reg.email || !reg.password) {
      toast.warning("Enter all details")
    }
    else {
      const data = await registerApi(reg)
      console.log(data)
      if (data.status == 200) {
        toast.success("Registration successfull")
        setReg({ name: "", age: "", phone: "", gender: "", address: "", email: "", password: "" })
      }
      else {
        toast.error("Registration failed")
      }


    }
  }

  return (
    <>

      {/* <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>

      <div className='row border shadow'>
        <h4 className='mt-4 text-center'>Welcome Back !</h4>
        <div className="col-6">
          <h4 className='text-center'>Sign In</h4>
          <div className='text-center'>
            <img src={logo} alt="" className='img-fluid mt-2 d-none d-sm-block' style={{ opacity: '90%', width: '250px', height: '350px' }} />
          </div>
          <div className='mt-1 text-center'>
            <Link to='/login' className='ms-2 ' style={{ fontSize: '25px' }}>Sign In</Link>
          </div>
        </div>

        <div className="col-6">
          <h4 className='text-center'> Sign Up </h4>
          <table className='table mt-3 mx-4'>
            <tr>
              <td>Name : </td>
              <td>
                <div>
                  <input type="text" name='name' value={reg.name} minLength={4} className='form-control' required focus={focus.errName.toString()} onBlur={()=>setFocus({...focus,errName:true})} onChange={(e) => { setReg({ ...reg, name: e.target.value }) }} />
                  <span>Name should contain minimum 4 letters*</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>Age : </td>
              <td><input type="number" name='age' value={reg.age} className='form-control' required onChange={(e) => setReg({ ...reg, age: e.target.value })} /></td>
            </tr>
            <tr>
              <td>Phone : </td>
             
              <td>
                <div>
                <input type="tel" name='phone' value={reg.phone}  minLength={10} maxLength={10} className='form-control' required focus={focus.errPh.toString()} onBlur={()=>setFocus({...focus,errPh:true})} onChange={(e) => { setReg({ ...reg, phone: e.target.value }) }} />
                <span>Phone no should contain 10 digits*</span>
                </div>
              
                </td>
            </tr>
            <tr>
              <td name='gender' >Gender : </td>
              <td style={{ paddingRight: '30px' }}><input type="radio" name="gender" id="male" value={'male'} onChange={(e) => { setReg({ ...reg, gender: e.target.value }) }} />Male</td>
              <td style={{ paddingRight: '40px' }}><input type="radio" name="gender" id="female" value={'female'} onChange={(e) => { setReg({ ...reg, gender: e.target.value }) }} />Female</td>
            </tr>
            <tr>
              <td>Address : </td>
              <td><input type="text" name='address' className='form-control' value={reg.address} required onChange={(e) => { setReg({ ...reg, address: e.target.value }) }} /></td>
            </tr>
            <tr>
              <td>Email : </td>
              <td>
                <div>
                <input type="email" name='email' value={reg.email} className='form-control' focus={focus.errEm.toString()} onBlur={()=>setFocus({...focus,errEm:true})} required  onChange={(e) => { setReg({ ...reg, email: e.target.value }) }} />
                <span>Invalid Email*</span>
                </div>
                </td>
            </tr>
            <tr>
              <td>Password : </td>
              <td>
                <div>
                <input type="password" name='password' value={reg.password} className='form-control' required focus={focus.errPassword.toString()} onBlur={()=>setFocus({...focus,errPassword:true})} onChange={(e) => { setReg({ ...reg, password: e.target.value }) }} />
                <span>Password should contain Capital letter,numbers & special character*</span>
                </div>
                </td>
            </tr>
          </table>
          <div className='text-center'>
            <button className='btn btn-success mb-2' onClick={handleregister}>Register</button>
          </div>

        </div>
      </div>
    </div> */}

      {/* ---------------------------------------------------------------------- */}

      <div className='d-flex justify-content-center align-items-center container' >
        <Row>
          <h2 className='text-center'>Welcome</h2>

          <Col xs={6} md={4} >
            <img src={logo} alt="" className='img-fluid mt-5 d-none d-sm-block' style={{ height: '300px', width: '400px' }} />
           
          </Col>

          <Col xs={12} md={8}>
            <table className='table mt-3 mx-4'>
              <tr>
                <td>Name : </td>
                <td>
                  <div>
                    <input type="text" name='name' value={reg.name} minLength={4} className='form-control' required focus={focus.errName.toString()} onBlur={() => setFocus({ ...focus, errName: true })} onChange={(e) => { setReg({ ...reg, name: e.target.value }) }} />
                    <span>Name should contain minimum 4 letters*</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Age : </td>
                <td><input type="number" name='age' value={reg.age} className='form-control' required onChange={(e) => setReg({ ...reg, age: e.target.value })} /></td>
              </tr>
              <tr>
                <td>Phone : </td>

                <td>
                  <div>
                    <input type="tel" name='phone' value={reg.phone} minLength={10} maxLength={10} className='form-control' required focus={focus.errPh.toString()} onBlur={() => setFocus({ ...focus, errPh: true })} onChange={(e) => { setReg({ ...reg, phone: e.target.value }) }} />
                    <span>Phone no should contain 10 digits*</span>
                  </div>

                </td>
              </tr>
              <tr>
                <td name='gender' >Gender : </td>
                <td style={{ paddingRight: '30px' }}><input type="radio" name="gender" id="male" value={'male'} onChange={(e) => { setReg({ ...reg, gender: e.target.value }) }} />Male</td>
                <td style={{ paddingRight: '40px' }}><input type="radio" name="gender" id="female" value={'female'} onChange={(e) => { setReg({ ...reg, gender: e.target.value }) }} />Female</td>
              </tr>
              <tr>
                <td>Address : </td>
                <td><input type="text" name='address' className='form-control' value={reg.address} required onChange={(e) => { setReg({ ...reg, address: e.target.value }) }} /></td>
              </tr>
              <tr>
                <td>Email : </td>
                <td>
                  <div>
                    <input type="email" name='email' value={reg.email} className='form-control' focus={focus.errEm.toString()} onBlur={() => setFocus({ ...focus, errEm: true })} required onChange={(e) => { setReg({ ...reg, email: e.target.value }) }} />
                    <span>Invalid Email*</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Password : </td>
                <td>
                  <div>
                    <input type="password" name='password' value={reg.password} className='form-control' required focus={focus.errPassword.toString()} onBlur={() => setFocus({ ...focus, errPassword: true })} onChange={(e) => { setReg({ ...reg, password: e.target.value }) }} />
                    <span>Password should contain Capital letter,numbers & special character*</span>
                  </div>
                </td>
              </tr>
            </table>
            <div className='text-center'>
            <button className='btn btn-success mb-2' onClick={handleregister}>Register</button>
          </div>
          <div className='mt-1 text-center'>
            <Link to='/login' className='ms-2 ' style={{ fontSize: '20px',fontFamily:'sans-serif', color:'brown'}}>Sign In</Link>
          </div>

          </Col>


          

        </Row>



      </div>

    </>
  )
}

export default Register
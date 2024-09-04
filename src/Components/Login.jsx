import React, { useState } from 'react'
import logo from '../assests/central perk.jpg'
import { json, Link, useNavigate } from 'react-router-dom'
import './register.css'
import { loginApi } from '../Services/allApis'
import { toast } from 'react-toastify'


function Login() {
    const [log,setLog]=useState({
        email:"",password:""
    })

    const [focus,setFocus]=useState({
        errEm:false,
        errPassword:false
    })
    console.log(log)

    const navigate=useNavigate()

    const handlelogin=async(e)=>{
        e.preventDefault()
        if(!log.email || !log.password){
            toast.warning("Fill the fields")
        }
        else {
            const data1=await loginApi(log)
            console.log(data1)
            if(data1.status==200){
                const current=data1.data
                console.log(current)
                sessionStorage.setItem("currentUser",JSON.stringify(current.excistingstud._id))
                sessionStorage.setItem("role",(current.role))
                
                sessionStorage.setItem("token",(current.token))
              
                toast.success("Logged in successfully")
                
                setLog({email:"",password:""})
                console.log(sessionStorage.getItem("role"))
                if(sessionStorage.getItem("role")==='admin'){
                    navigate('/admindb')
                }
                else{
                    navigate('/userdb')
                }
            }
            else{
                toast.error("Login failed")
            }
        }

    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='row border shadow ' style={{width:'700px'}}>
                    <h2 className='text-center'>Login</h2>
                    <div className="col mt-5">

                        <form action="">
                            <div className='mb-3'>
                            <input type="email" required id='email' focus={focus.errEm.toString()} onBlur={()=>setFocus({...focus,errEm:true})} name='email' value={log.email} placeholder='Enter your email' className='form-control' onChange={(e)=>{setLog({...log,email:e.target.value})}}/>
                            <span>*invalid email id</span>
                            </div>
                            <div>
                            <input required pattern='^[A-Z][^A-Z]*$'focus={focus.errPassword.toString()} onBlur={()=>setFocus({...focus,errPassword:true})} type="password" id='password' name='password' value={log.password} placeholder='Enter your password' className='form-control' onChange={(e)=>{setLog({...log,password:e.target.value})}}/>
                            <span>*password should start with uppercase</span>
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                            <button className='btn btn-info' onClick={handlelogin}>Login</button>
                            <Link to={'/'} className='ms-3 mt-2'>Register</Link>


                            </div>
                        </form>
                    </div>
                    <div className="col mb-4">
                       <img src={logo} alt="" className='img-fluid' style={{height:'300px',width:'400px'}} />
                    </div>

                </div>
                

                
            </div>
        </>
    )
}

export default Login
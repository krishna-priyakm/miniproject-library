import React, { useContext, useEffect, useState } from 'react'
import Admin from './Admin'
import { bookviewApi, deletebookApi } from '../Services/allApis'
import Editbook from './Editbook'
import { toast } from 'react-toastify'
import { editBookResponseContext } from '../contextApi/ContextShare'


function Viewbook() {

    const [view,setView]=useState([])
    const [token,setToken]=useState([])
    const {editBookResponse,setEditBookResponse}=useContext(editBookResponseContext)

    const fetchDetails=async()=>{
        const response=await bookviewApi()
        console.log(response.data)
        setView(response.data)
    }

    const deletebook=async(id)=>{
        console.log(id)
        const reqheader={
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }

        const result=await deletebookApi(id,reqheader)

        if(result.status==200){
            toast.success("Book deatils removed successfully")
            fetchDetails()
        }
        else{
            toast.error("Book details deletion failed")
        }
    }

    useEffect(()=>{
        fetchDetails()
        if(sessionStorage.getItem('token')) {
            setToken(sessionStorage.getItem('token'))
        }
    },[editBookResponse])

    console.log(token)
    console.log(view)

    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <Admin />
                    </div>

                    <div className='col-10 mt-3 p-2'>
                        <div className='d-flex justify-content-center'>
                            <div className='border shadow' style={{width:'990px',height:'450px',overflowY:'scroll'}}>
                                <h3 className='text-center'>View Book</h3>
                                <table className='table table-striped table-bordered '>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Number</th>
                                        <th>Cover</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            view?.map((item,index)=>(
                                            <tr>
                                            <td>{index+1}</td>
                                            <td>{item.title}</td>
                                            <td>{item.author}</td>
                                            <td>{item.description}</td>
                                            <td>{item.category}</td>
                                            <td>{item.number}</td>
                                            <td>{item.cover}</td>
                                            <td>
                                               <Editbook data={item}/>
                                                <button className='btn btn-outline-danger btn-sm ms-2' onClick={()=>{deletebook(item._id)}}>Delete</button>
                                            </td>
                                        </tr>
                                            ))
                                        }
                                    </tbody>
                                    
                                </table>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Viewbook
import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import { deletestudentApi, studentlistApi } from '../Services/allApis'
import { toast } from 'react-toastify'


function Studentlist() {

    const [list, setList] = useState([])

    const [token, setToken] = useState([])

    const fetchDetails = async () => {
        const result = await studentlistApi()
        console.log(result.data)
        setList(result.data)
    }

    const deletestud = async (id) => {
        console.log(id)
        const reqheader = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        const data = await deletestudentApi(id, reqheader)

        if (data.status == 200) {
            toast.success("Student removed successfully")
            fetchDetails()
        }
        else {
            toast.error("Student deletion failed...")
        }
    }

    useEffect(() => {
        fetchDetails()
        if (sessionStorage.getItem('token')) {
            setToken(sessionStorage.getItem('token'))
        }
    }, [])

    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-2'>
                        <Admin />

                    </div>

                    <div className='col-10 mt-3'>
                        <div className='d-flex justify-content-center'>
                            <div className='border shadow' style={{ width: '700px' }}>
                                <h3 className='text-center'>Student List</h3>
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list?.map((item, index) => (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        <button className='btn btn-outline-danger btn-sm' onClick={() => { deletestud(item._id) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
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

export default Studentlist
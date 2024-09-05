import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import { approveApi, incrcountApi, viewbookingApi } from '../Services/allApis'
import { toast } from 'react-toastify'

function Bookinglist() {

    const [view, setView] = useState([])

    const [approved,setApproved]=useState({
        status:'Approved'
    })
    console.log(approved)

    const fetchDetails = async () => {
        const response = await viewbookingApi()
        console.log(response)
        setView(response.data)
    }

    const handleapprove=async(id)=>{
        const result=await approveApi(id,approved)
        console.log(result)
        setApproved({...approved,result})
        if(result.status==200){
            const incrcount=await incrcountApi()
            toast.success("Approve successfull & Count increased")
        }
        else{
            toast.error("Something went wrong")
        }

    }



    console.log(view)

    useEffect(() => {
        fetchDetails()
    })

    return (
        <>
            <div>
                
                        <Admin />

                 
                        <div className='d-flex justify-content-center'>
                            <div className='border shadow mt-2' style={{ width: '900px', height: '450px', overflowY: 'scroll' }}>
                                <h3 className='text-center'>Booking List</h3>
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Book Name</th>
                                            {/* <td>Book-Id</td> */}
                                            <th>Student-Id</th>
                                            <th>Booking Date</th>
                                            <th>Return Date</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            view?.map((item,index) => (
                                                <tr>
                                                    <td>{index+1}</td>
                                                    <td>{item.book_name}</td>
                                                    {/* <td style={{fontFamily:'monospace'}}>{item.book_id}</td> */}
                                                    <td style={{fontFamily:'monospace'}}>{item.student_id}</td>
                                                    <td style={{fontFamily:'sans-serif',fontSize:'15px'}}>{item.booking_date}</td>
                                                    <td style={{fontFamily:'sans-serif',fontSize:'15px'}}>{item.return_date}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        {
                                                             item.status=="Returned" ?
                                                            <button className='btn btn-primary btn-sm' onClick={()=>handleapprove(item._id)}>Approve</button>
                                                            :
                                                            <span></span>
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>

                                </table>
                            </div>

                        </div>

                    </div>

        </>
    )
}

export default Bookinglist
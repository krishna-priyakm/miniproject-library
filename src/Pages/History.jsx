import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { historyApi, returnApi } from '../Services/allApis';
import { toast } from 'react-toastify';


function History({user}) {
    const [show, setShow] = useState(false);

    const [history,setHistory]=useState([])

    const [retunbook,setReturnbook]=useState({
        status:'Returned'
    })
    console.log(retunbook)

   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const returnbooks = async(id)=>{
        const respond=await returnApi(id,retunbook)
        console.log(respond)
        if(respond.status==200){
            toast.success("Book returned successfully")
            fetchDetails()
        }
        else{
            toast.error("Book returning failed")
        }
        
        console.log(id)
    }

    const fetchDate=async()=>{
        const cdate=new Date()
        const date=cdate.getDate()
        console.log(date)
        const month=cdate.getMonth()+1
        console.log(month)
        const year=cdate.getFullYear()
        console.log(year)
        const  currentdate = `${date}-${month}-${year}`
        console.log(currentdate)
        setReturnbook({...retunbook, return_date: currentdate})
    }



    const fetchDetails = async () => {
      
        const result=await historyApi(user.student_id)
        console.log(result)
        setHistory(result.data)
    }
    

    useEffect(() => {
        fetchDetails()
        fetchDate()
        
    },[])

    
    

   



    return (
        <>
            <Button className='btn btn-dark' onClick={handleShow}>
                History
            </Button>

            <Modal show={show} onHide={handleClose} className='modal-lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Booking history</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Booking Date</th>
                                <th>Return Date</th>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history?.map(item => (
                                    <tr>
                                        <td>{item.book_name}</td>
                                        <td>{item.booking_date}</td>
                                        <td>{item.return_date}</td>
                                        <td>
                                            {
                                                item.return_date ?
                                                <span></span>
                                                :
                                                <button className='btn btn-danger'onClick={()=>returnbooks(item._id)}>Return</button>
                                            }
                                            
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default History
import React, { useEffect, useState } from 'react'
import './userdash.css'
import book from '../assests/cardbook.jpg'
import Card from 'react-bootstrap/Card';
import { addbookingApi, viewbookApi , decrcountApi} from '../Services/allApis';
import { BASE_URL } from '../Services/baseUrl';
import History from './History';
import { toast } from 'react-toastify';

function UserDash() {

  const [view, setView] = useState([])

  const [search,setSearch]=useState('')
  

  const [user,setUser]=useState({
    student_id: JSON.parse(sessionStorage.getItem('currentUser'))
  })

  const [booking, setBooking] = useState({
    student_id: JSON.parse(sessionStorage.getItem('currentUser'))
  })

  console.log(booking)
  console.log(search)

  const fetchDetails = async () => {
    const response = await viewbookApi(search)
    console.log(response)
    setView(response.data)
  }

  

  const handlebooking = async (item) => {
    const { _id: book_id } = item
    console.log(book_id)
    setBooking({ ...booking, book_id })
    const datatosend = { book_id, student_id: booking.student_id, booking_date: booking.booking_date, book_name: item.title }
    console.log(datatosend)
    const result=await addbookingApi(datatosend)
    console.log(result)
    if(result.status==200){
      const result1=await decrcountApi(book_id)
      console.log(result1)
      if(result1.status==201){
        toast.success("Booked successfullyy!!")
      }
      
    }
    else{
      toast.warning("Excisting Book..")
    }
    
    
  }

  const todaydate = async () => {
    const cdate = new Date()
    console.log(cdate)
    const date = cdate.getDate()
    console.log(date)
    const month = cdate.getMonth()+1
    console.log(month)
    const year = cdate.getFullYear()
    console.log(year)
    const currentdate = `${date}-${month}-${year}`
    console.log(currentdate)
    setBooking({ ...booking, booking_date: currentdate })

  }



  useEffect(() => {

    fetchDetails()
    todaydate()
 

  }, [search])



  return (
    <>
      <div className='mb-5 pb-5 ms-2' >

        <div className='row mt-2'>

          <div className='col-lg-11'>
          <h2>Welcome User</h2>
          </div>

          <div className='col-lg-1'>
          <History user={user}/>
          </div>
          
        </div>



        <div className='mt-2 text-center '>
          <h3>All Books</h3>
        </div>
        <input type="text" placeholder='Search for books here' className='form-control mt-1' onChange={(e)=>setSearch(e.target.value)} />



        <div className='row mb-3'>

          {

            view?.map(item => (
              <div className='col-lg-3 mb-3'>


                <Card style={{ width: '15rem', height: '350px' }} className='mt-3'>
                  <Card.Img src={`${BASE_URL}/upload/${item.cover}`} style={{ height: '120px', width: '225px' }} className='ms-3 mt-2' />
                  <Card.Body className='text-center'>
                    <h6 className='f2'>{item.title}</h6>
                    <div >
                      <h6 className='f1'>{item.author}</h6>
                      <div className='f1' style={{ height: '90px', fontSize: '10px' }}>{item.description}</div>
                    </div>

                    <div className='d-grid'>
                      {
                        item.number==0?
                        <button className='btn btn-secondary'>Out of stock</button>
                        :
                        <button className='btn btn-block btn-success f1' onClick={() => { handlebooking(item) }}>BOOK</button>
                      }
                    </div>
                  </Card.Body>
                </Card>
              </div>

            ))
          }



        </div>
      </div>


    </>
  )
}

export default UserDash
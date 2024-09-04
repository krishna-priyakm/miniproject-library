import React, { useEffect, useState } from 'react'
import Admin from './Admin'
import cover from '../assests/bookcover.jpg'
import { bookregApi } from '../Services/allApis'
import { toast } from 'react-toastify'


function Addbook() {
    const [addbook, setAddbook] = useState({
        title: "", author: "", descrpition: "", category: "", number: "", cover: "", adminid: ""
    })
    console.log(addbook)

    const [token, setToken] = useState()

    const [preview,setPreview]=useState()

    useEffect(() => {
        const excistingUser = JSON.parse(sessionStorage.getItem('currentUser'))
        // console.log(excistingUser)
        setAddbook({ ...addbook, adminid: excistingUser })

        if (sessionStorage.getItem('token')) {
            setToken(sessionStorage.getItem('token'))

        }

    }, [])

    useEffect(()=>{
        if(addbook.cover){
            setPreview(URL.createObjectURL(addbook.cover))
        }
    },[addbook.cover])
    
    console.log(token)

    const handlesubmit = async () => {
        if (!addbook.title || !addbook.author || !addbook.description || !addbook.category || !addbook.number || !addbook.cover) {
            toast.warning("Book adding failed")
        }
        else {
            const bookdata = new FormData()
            bookdata.append('title', addbook.title)
            bookdata.append('author', addbook.author)
            bookdata.append('description', addbook.description)
            bookdata.append('category', addbook.category)
            bookdata.append('number', addbook.number)
            bookdata.append('cover', addbook.cover)
            bookdata.append('adminid',addbook.adminid)
            const reqheader = {
                'Content-Type': 'multipart/formdata',
                'Authorization': `Bearer ${token}`
            }
            console.log(reqheader)
            const data=await bookregApi(bookdata,reqheader)
            console.log(data)
            toast.success("Book detailed added successfully")
            

        }

    }



    return (
        <>
            <div>
                <div className='row'>
                    <div className='col-3'>
                        <Admin />

                    </div>
                    <div className='col-9 mt-3 p-2'>

                        <div className='d-flex justify-content-center'>
                            <div className='border shadow' style={{ width: '700px' }}>
                                <h4 className='text-center'>Add Book</h4>
                                <div className='row'>
                                    <div className='col mt-5 mx-4'>
                                        <label htmlFor="cover">
                                            <input type="file" id='cover' name='cover' className='form-control' style={{ display: 'none' }} onChange={(e) => { setAddbook({ ...addbook, cover: e.target.files[0] }) }} />
                                            <img src={preview?preview : cover} alt="" style={{ width: '250px' }} />
                                        </label>
                                    </div>
                                    <div className='col'>
                                        <input type="text" placeholder='Title' className='form-control' required onChange={(e) => { setAddbook({ ...addbook, title: e.target.value }) }} /><br />
                                        <input type="text" placeholder='Author' className='form-control' required onChange={(e) => { setAddbook({ ...addbook, author: e.target.value }) }} /><br />
                                        <input type="text" placeholder='Description' className='form-control' required onChange={(e) => { setAddbook({ ...addbook, description: e.target.value }) }} /><br />
                                        <input type="text" placeholder='Category' className='form-control' required onChange={(e) => { setAddbook({ ...addbook, category: e.target.value }) }} /><br />
                                        <input type="text" placeholder='Number' className='form-control' required onChange={(e) => { setAddbook({ ...addbook, number: e.target.value }) }} /><br />
                                        <button className='btn btn-outline-success' onClick={handlesubmit} >Submit</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Addbook
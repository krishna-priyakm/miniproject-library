import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../Services/baseUrl';
import { editbookApi } from '../Services/allApis';
import { toast } from 'react-toastify';
import { editBookResponseContext } from '../contextApi/ContextShare';


function Editbook({ data }) {
  const [show, setShow] = useState(false)

  const [token,setToken]=useState()

  const [preview, setPreview] = useState("")

  const {editBookResponse,setEditBookResponse}=useContext(editBookResponseContext)

  const [edit, setEdit] = useState({
    title: data.title, author: data.author, description: data.description, category: data.category, number: data.number, cover: data.cover,adminid:data.adminid,id:data._id

  })
  console.log(edit)

  console.log(edit.id)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlesave=async()=>{
    if(!edit.title || !edit.author || !edit.description || !edit.category || !edit.number || !edit.cover){
      toast.warning("Enter all details")
    }
    else{
      const editbook=new FormData()
      editbook.append('title',edit.title)
      editbook.append('author',edit.author)
      editbook.append('description',edit.description)
      editbook.append('category',edit.category)
      editbook.append('number',edit.number)
      editbook.append('cover',edit.cover)
      editbook.append('adminid',edit.adminid)
      const reqheader={
        'Content-Type':'multipart/formdata',
        'Authorization':`Bearer ${token}`
      }
      console.log(reqheader)
      const data=await editbookApi(edit.id,editbook,reqheader)
      console.log(data.data)
      setEditBookResponse(data.data)
      toast.success("Book details edited successfully")
      handleClose()

    }
  }

  useEffect(() => {
    if (data.cover != edit.cover) {
      setPreview(URL.createObjectURL(edit.cover))
    }
  }, [edit.cover])

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setToken(sessionStorage.getItem('token'))
    }
  },[])

  return (
    <>
      <button className='btn btn-warning btn-sm ' onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose} className='modal-lg'>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col'>
              <label htmlFor="cover">
                <input type="file" style={{ display: 'none' }} className='form-control' id='cover' name='cover' onChange={(e) => { setEdit({ ...edit, cover: e.target.files[0] }) }} />
                <img src={preview ? preview : `${BASE_URL}/upload/${edit.cover}`} alt="" style={{width:'200px'}}/>

              </label>
            </div>
            <div className='col'>

              <table className='table'>
                <tr>
                  <td>Title : </td>
                  <td><input type="text" className='form-control' defaultValue={data.title} onChange={(e) => { setEdit({ ...edit, title: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td>Author : </td>
                  <td><input type="text" className='form-control' defaultValue={data.author} onChange={(e) => { setEdit({ ...edit, author: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td>Description : </td>
                  <td><input type="text" className='form-control' defaultValue={data.description} onChange={(e) => { setEdit({ ...edit, description: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td>Category : </td>
                  <td><input type="text" className='form-control' defaultValue={data.category} onChange={(e) => { setEdit({ ...edit, category: e.target.value }) }} /></td>
                </tr>
                <tr>
                  <td>Number : </td>
                  <td><input type="number" className='form-control' defaultValue={data.number} onChange={(e) => { setEdit({ ...edit, number: e.target.value }) }} /></td>
                </tr>

              </table>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Editbook
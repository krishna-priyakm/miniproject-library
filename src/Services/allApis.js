import { BASE_URL } from "./baseUrl";
import { commonRequest } from "./commonApis";

export const registerApi=async(data)=>{
    return await commonRequest ("POST",`${BASE_URL}/student/register`,data,'')

}

export const loginApi=async(data)=>{
    return await commonRequest("POST",`${BASE_URL}/student/login`,data,'')
}

export const bookregApi=async(data,header)=>{
    return await commonRequest("POST",`${BASE_URL}/book/register`,data,header)
}

export const viewbookApi=async(search)=>{
    return await commonRequest("GET",`${BASE_URL}/book/view?search=${search}`,'','')
}

export const bookviewApi=async()=>{
    return await commonRequest("GET",`${BASE_URL}/book/bookview`,'','')
}

export const deletebookApi=async(id,header)=>{
    return await commonRequest("DELETE",`${BASE_URL}/book/delete/${id}`,{},header)
}

export const editbookApi=async(id,data,header)=>{
    return await commonRequest("PUT",`${BASE_URL}/book/edit/${id}`,data,header)
}

export const studentlistApi=async()=>{
    return await commonRequest("GET",`${BASE_URL}/student/list`,'','')
}

export const deletestudentApi=async(id,header)=>{
    return await commonRequest("DELETE",`${BASE_URL}/student/delete/${id}`,{},header)
}

export const addbookingApi=async(data)=>{
    return await commonRequest("POST",`${BASE_URL}/booking/add`,data,'')
}

export const decrcountApi=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/booking/decrcount/${id}`,'','')
}

export const viewbookingApi=async()=>{
    return await commonRequest("GET",`${BASE_URL}/booking/viewbooking`,'','')
}

export const historyApi=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/booking/history/${id}`,'','')
}

export const returnApi=async(id,data)=>{
    return await commonRequest("PUT",`${BASE_URL}/booking/return/${id}`,data,'')
}

export const approveApi=async(id,data)=>{
    return await commonRequest("PUT",`${BASE_URL}/booking/approve/${id}`,data,'')
}

export const incrcountApi=async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/booking/incrcount/${id}`,'','')
}
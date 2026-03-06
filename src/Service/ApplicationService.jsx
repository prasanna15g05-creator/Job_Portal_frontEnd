import axios from "axios";  
const API_URL="https://job-portal-frontend-6dv2.onrender.com/applications";
const getAuthHeader=()=>{
    const token=localStorage.getItem("token");
    return{
        Authorization:`Bearer ${token}`
    };
};
export const getApplicationByEmployee=async(id)=>{
    return await axios.get(`${API_URL}/jobSeeker/${id}`,{
        headers:{
                ...getAuthHeader()
        }
    });
}
export const createApplication=async(applicationData)=>{
    return await axios.post(`${API_URL}/add`,applicationData,{
        headers:{
            'Content-Type':'application/json',
                 ...getAuthHeader()
        }
    }
)}
export const getApplicationByEmployer=async(id)=>{
    return await axios.get(`${API_URL}/employer/${id}`,
        {
            headers:{
                     ...getAuthHeader()
            }
        }
    );
}
export const updateApplication=async(id,data)=>{
    return await axios.patch(`${API_URL}/${id}`,data,{
        headers:{
            'Content-Type':'application/json',
                 ...getAuthHeader()
        }
    }
)};
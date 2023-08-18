import { httpAxios } from "@/utils/httpAxios";

export async function UploadQuesImage(data){
    const results=await httpAxios.post('/api/uploadQuesImage',data).then(Response=>Response.data);
    return results
}
export async function UploadPosImage(data){
    const results=await httpAxios.post('/api/uploadPosImage',data).then(Response=>Response.data);
    return results
}
export async function addQues(data){
    const results=await httpAxios.post('/api/addQues',data).then(Response=>Response.data);
    return results
}
export async function addPos(data){
    const results=await httpAxios.post('/api/addPos',data).then(Response=>Response.data);
    return results
}
export async function getAllQues(data){
    const results=await httpAxios.get('/api/getAllQues').then(Response=>Response.data);
    return results
}
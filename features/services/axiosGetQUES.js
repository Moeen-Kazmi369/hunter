import { httpAxios } from "@/utils/httpAxios";

export const UploadedImage=async()=>{
    console.log(process.env.BASE_URL);
    const results= await httpAxios.post('/api/uploadfile').then((Response)=> Response.data);
    return results;
}
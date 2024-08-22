import { serverURL } from "./serverURL";
import { commonApi } from "./commonApi";

//1) upload video
export const uploadVideo = async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/videos`,reqBody)
}

//2) get all videos
export const getAllVideos = async ()=>{
    return await commonApi('GET',`${serverURL}/videos`,"")
    //http://localhost:4000/videos
}

//3 delete video
export const deleteVideo = async (id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
    //http://localhost:4000/video/1
}

//4 add to watch history
export const addToHistory = async (reqBody)=>{
    return await commonApi('POST',`${serverURL}/history`,reqBody)
}

//5 get all history
export const getHistory = async()=>{
    return await commonApi('GET',`${serverURL}/history`,"")
}

//6 delete history by id
export const deleteHistory = async(id)=>{
    return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
}

//7 add category
export const addCategory = async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/category`,reqBody)
}

//8 get all category
export const getAllCategory = async()=>{
    return await commonApi('GET',`${serverURL}/category`,"")
}

// delete category
export const deleteCategory = async(id)=>{
    return await commonApi('DELETE',`${serverURL}/category/${id}`,{})
}

// get video details by id
export const getAllVideosById = async(id) => {
    return await commonApi('GET',`${serverURL}/videos/${id}`,"")
    // http://localhost:4000/videos
}

// update category with video details

export const updateCategory = async (data, id)=>{
    return await commonApi('PUT',`${serverURL}/category/${id}`,data)
}
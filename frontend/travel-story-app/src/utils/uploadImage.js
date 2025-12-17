import axiosInstance from "./axiosInstances";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    // Apppend image file to form data
    formData.append('image',imageFile);

    try{
        const response = await axiosInstance.post('/image-upload',formData,{
            headers: {
                'Content-Type': 'multipart/form-data', // Set header for file upload
            },
        });
        return response.data; //Return response data
    }
    catch(error){
        console.error('Error uploading the image:',error);
        throw error; //Rethrow error for handling
    }
};

export default uploadImage;
export const ImageUplodonCloudinery = async (file: string | Blob) => {
    const formData = new FormData();
    
    formData.append('file', file);

    const my_upload_preset = import.meta.env.VITE_Preset_name
    const my_cloude_name = import.meta.env.VITE_cloude_name

    formData.append('upload_preset', my_upload_preset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${my_cloude_name}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (response.ok) {
            return data.secure_url;
        } else {
            throw new Error(data.error.message);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
};

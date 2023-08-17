'use client'
import { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

const PosImageUpload = () => {
  const [Tempimage, setTempImage] = useState(null);
  const [image, setImage] = useState();

  const handleImageChange = (event) => {
    event.preventDefault();
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setTempImage(URL.createObjectURL(selectedImage));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setTempImage(null);

    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Image uploaded successfully:', result.imageUrl);
          // Now you can use the imageUrl as needed
        } else {
          console.error('Error uploading image:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleUpload}>
      <label htmlFor="image" className="upload-label">
        <div className="upload-icon">
          {
            Tempimage?(
              <div className='flex'>
              <ImCross
              className='mt-2'
              onClick={(e)=>{
                e.preventDefault();
                setImage(null);
              }}
              />
              <button type={'submit'}>
              <TiTick
              className='ml-3 text-3xl'
              />
              </button>
              </div>
            ):(
              <BsImages/>
            )
          }
        </div>
        <input
          type="file"
          id="image"
          name='image'
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        {Tempimage ? (<div className='flex'>
          <img src={Tempimage} alt="Uploaded" className="uploaded-image" />
          </div>
        ) : null}
      </label>
      </form>
      <style jsx>{`
        .upload-label {
          display: inline-block;
          text-align: center;
          cursor: pointer;
        }

        .upload-icon {
          margin-bottom: 8px;
        }

        .uploaded-image {
          display: block;
          max-width: 100%;
          max-height: 200px;
          margin: 10px auto;
        }
      `}</style>
    </div>
  );
};

export default PosImageUpload;

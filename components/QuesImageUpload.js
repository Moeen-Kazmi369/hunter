'use client'
import { useState } from 'react';
import { BsImages } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { useGlobalState } from './GlobalStateProvider';

const QuesImageUpload = () => {
  const [Tempimage, setTempImage] = useState(null);
  const [image, setImage] = useState();
  const{QuseImageUrl,setQuesImageUrl} =useGlobalState()

  const handleImageChange = (event) => {
    event.preventDefault();
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setTempImage(URL.createObjectURL(selectedImage));
  };

  const onSubmit = async (e) => {
    setTempImage(null);
    e.preventDefault()
    if (!image) return

    try {
      const data = new FormData()
      data.set('file', image)
      setQuesImageUrl(image.name);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
      console.log(res);
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
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

export default QuesImageUpload;

'use client'
import { UploadPosImage, addPos } from '@/features/services/services';
import { useState,useEffect } from 'react';
import { BsImages } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

const PosImageUpload = ({Pos}) => {
  const [TempPosimage, setTempPosImage] = useState(null);
  const [Posimage, setPosImage] = useState();
  const[Data,setData]=useState();
  const handlePosImageChange = (event) => {
    event.preventDefault();
    console.log('Pos lan pr char');
    const selectedImage = event.target.files[0];
    setPosImage(selectedImage);
    setTempPosImage(URL.createObjectURL(selectedImage));
  };

  const onSubmit = async (e) => {
    setTempPosImage(null);
    e.preventDefault()
    if (!Posimage) return

    try {
      const data = new FormData()
      const imageName = `${Date.now()}pic.jpg`; // New image name based on count
      data.set('file', Posimage, imageName);
      setData({
        post:Pos,
        image:imageName,
      });
      const results=await UploadPosImage(data);
      // handle the error
      console.log(results);
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }
  const AddPos=async(e)=>{
    e.preventDefault();
    try {
      const results= await addPos(Data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex justify-between w-full'>
      <form onSubmit={onSubmit}>
      <label htmlFor="Posimage" className="upload-label">
        <div className="upload-icon">
          {
            TempPosimage?(
              <div className='flex'>
              <ImCross
              className='mt-2'
              onClick={(e)=>{
                e.preventDefault();
                setTempPosImage(null);
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
          id="Posimage"
          name='image'
          accept="image/*"
          onChange={handlePosImageChange}
          style={{ display: 'none' }}
        />
        {TempPosimage ? (<div className='flex'>
          <img src={TempPosimage} alt="Uploaded" className="uploaded-image" />
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
      <div>
      <button
                onClick={AddPos}
                className="px-2 py-1 rounded border-none bg-black text-white"
              >
                Post
              </button>
      </div>
    </div>
  );
};

export default PosImageUpload;

'use client'
import { UploadQuesImage, addQues } from '@/features/services/services';
import { useState,useEffect } from 'react';
import { BsImages } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

const QuesImageUpload = ({Ques,setQState}) => {
  const [Tempimage, setTempImage] = useState(null);
  const [image, setImage] = useState();
  const[Data,setData]=useState()
  const handleImageChange = (event) => {
    event.preventDefault();
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    console.log('Ques lan pr char');
    setTempImage(URL.createObjectURL(selectedImage));
  };

  const onSubmit = async (e) => {
    setTempImage(null);
    e.preventDefault()
    if (!image) return

    try {
      const data = new FormData()
      const imageName = `${Date.now()}pic.jpg`; // New image name based on count
      data.set('file', image, imageName);
      setData({
        question:Ques,
        image:imageName,
      });
      const results = await UploadQuesImage(data);
      // handle the error
      console.log(results);
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }
  const AddQues=async(e)=>{
    e.preventDefault()
    try {
      const results = await addQues(Data);
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex justify-between w-full'>
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
                setTempImage(null)
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
         <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setQState(false);
                  }}
                  className="px-2 py-1 rounded border-none bg-zinc-100 text-black mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={AddQues}
                  className="px-2 py-1 rounded border-none bg-black text-white"
                >
                  Add Question
                </button>
              </div>
    </div>
  );
};

export default QuesImageUpload;

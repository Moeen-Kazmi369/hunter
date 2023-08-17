'use client'
import React, { useState } from 'react'
import QuesImageUpload from './QuesImageUpload';
import PosImageUpload from './PosImageUpload';
import {RxCross1} from 'react-icons/rx';
import { useGlobalState } from './GlobalStateProvider';

const Page = () => {
    const { Qstate, setQState,Cstate,setCState,QuesImageUrl,PosImageUrl } = useGlobalState();
    const[Qdata,setQData]=useState({
        question:"",
        imageUrl:QuesImageUrl,
    });
    const[Pdata,setPData]=useState({
        post:"",
        imageUrl:PosImageUrl,
    });
  return (
   <>
   <div className={`fixed  top-0 left-0 w-[100vw] h-[100vh] ${(Qstate||Cstate)? 'flex':'hidden'} justify-center items-center`}>
   <section className='m-5 p-5 bg-white text-black w-1/2 h-3/4'>
    <RxCross1 onClick={(e)=>{
        e.preventDefault();
        if(Qstate||Cstate){
            setCState(false);
            setQState(false);
        }
    }}/>
    <nav className='flex justify-evenly mb-4'>
        <button
        onClick={(e)=>{
            e.preventDefault();
            setCState(false)
            setQState(true)
          }}
        className={`${Qstate?'border-b-2':'border-none'} border-black rounded`}>ADD QUESTION</button>
        <button
        onClick={(e)=>{
            e.preventDefault();
            setQState(false)
            setCState(true)
          }}
        className={`${Cstate?'border-b-2':'border-none'} border-black rounded`}>CREATE POST</button>
    </nav>
    <main className={`${Qstate?'flex':'hidden'} flex-col justify-between h-[90%] w-auto`}>
        <div>
            <input
            name='question'
            type='text'
            id='question'
            value={Qdata.question}
            onChange={(e)=>setQData({
                ...Qdata,
                question:e.target.value
            })}
            placeholder='Ask any question'
            className="border-b border-blue-600 px-2 py-1 visited:border-none w-full"
            />
        </div>
        <div className='flex justify-between'>
            <QuesImageUpload/>
           <div>
           <button
            onClick={(e)=>{
                e.preventDefault();
                setQState(false)
              }}
            className='px-2 py-1 rounded border-none bg-zinc-100 text-black mr-2'>Cancel</button>
            <button
            onClick={(e)=>{
                e.preventDefault();
    console.log(Qdata)
            }}
            className='px-2 py-1 rounded border-none bg-black text-white'>Add Question</button>
           </div>
        </div>
    </main>
    <main className={`${Cstate?'flex':'hidden'} flex-col justify-between h-[90%] w-auto`}>
        <div>
            <textarea
            name='post'
            type={'text'}
            id='post'
            value={Pdata.post}
            onChange={(e)=>setPData({
                ...Pdata,
                post:e.target.value
            })}
            rows='10'
            cols='67'
            placeholder='Say something'
            />
        </div>
        <div className='flex justify-between'>
            <PosImageUpload/>
            <button
            onClick={(e)=>{
                e.preventDefault();
    console.log(Pdata)
            }}
            className='px-2 py-1 rounded border-none bg-black text-white'>Post</button>
        </div>
    </main>
   </section>
   </div>
   </>
  )
}

export default Page
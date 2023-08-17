"use client";
import { useGlobalState } from "./GlobalStateProvider";
import React from "react";
const Page = () => {
  const { Qstate,setQState,Cstate,setCState } = useGlobalState();
  return (
    <>
      <style jsx>
        {`
          .main-container {
            position: relative;
            width: 100%;
            height: 90vh; /* Adjust this height as needed */
            background-size: cover;
            background-repeat: no-repeat;
            animation: combinedAnimation 15s infinite alternate;
          }

          @keyframes combinedAnimation {
            0%,
            100% {
              background-image: url("/Hero-Pics/pic1.jpg");
              transform: scale(1);
            }
            25%,
            75% {
              background-image: url("/Hero-Pics/pic2.jpg");
            }
            50% {
              background-image: url("/Hero-Pics/pic3.jpg");
              transform: scale(1.05);
            }
          }

          .main-container:hover {
            animation: combinedAnimation 15s infinite alternate;
          }

          /* You can optionally add a transition for smoother scaling */
          .main-container {
            transition: transform 0.3s linear;
          }
          .main-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
          }
        `}
      </style>
      <section className={`text-gray-600 body-font main-container`}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="flex flex-col mt-10 md:mb-0 items-center text-center z-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              HUNTING CODER
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button
              onClick={(e)=>{
                e.preventDefault();
                setQState(true)
              }}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                ADD QUESTION
              </button>
              <button
              onClick={(e)=>{
                e.preventDefault();
                setCState(true)
              }}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                CREATE POST
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

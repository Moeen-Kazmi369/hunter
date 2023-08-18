'use client'
import { useGlobalState } from "@/components/GlobalStateProvider";
import { getAllQues } from "@/features/services/services";
import React, { useState, useEffect } from "react";

const Page = () => {
const[QuesData,setQuesData]=useState([]);

  useEffect(() => {
    // Fetch JSON data from the server
    async function fetchImageUrls() {
      try {
        const results=await getAllQues();
        // console.log(results.data);
        setQuesData(results.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }

    fetchImageUrls();
  }, []);
  return (
    <>
    <div className="pt-[10rem]">
    <h1 className="text-center text-7xl font-extrabold text-black">Coder Questions</h1>
      {QuesData && QuesData.map((Ques) => (
        <div key={Ques._id} className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt={`Image ${Ques._id}`}
            src={`/Ques/${Ques.image}`}
          />
          <h3>{Ques.question}</h3>
        </div>
      ))}
      </div>
    </>
  );
};

export default Page;

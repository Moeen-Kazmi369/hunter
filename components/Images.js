// 'use client'
// import { useGlobalState } from "@/components/GlobalStateProvider";
// import React, { useState,useEffect } from "react";

// const Page = () => {
//     const{QuesImageUrl} = useGlobalState();
//     const [data,setData]=useState([]);
//     useEffect(async() => {
//       const updatedData = [...data, QuesImageUrl];
//     setData(updatedData);

//     // Update JSON file on the server
//     await fetch("/imageLinks.json", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedData),
//     });
//     const Data= await fetch(JSON.parse('/imageLinks.json'));
// console.log(Data);
//     }, [QuesImageUrl]);
//   return (
//     <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//       <img
//         className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//         alt="hero"
//         src="/tmp/img1.jpg"
//       />
//     </div>
//   );
// };

// export default Page;

'use client'
// GlobalStateContext.js
import { createContext, useContext, useState } from 'react';

import React from 'react'
const GlobalStateContext = createContext();

const GlobalStateProvider = ({children}) => {
  const [Qstate, setQState] = useState(false);
  const [Cstate, setCState] = useState(false);
  const [QuesImageUrl,setQuesImageUrl]=useState([]);
  const [PosImageUrl,setPosImageUrl]=useState('');
  return (
    <GlobalStateContext.Provider value={{ Qstate,setQState,Cstate,setCState,QuesImageUrl,setQuesImageUrl,PosImageUrl,setPosImageUrl }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalStateProvider;
export const useGlobalState = () => useContext(GlobalStateContext);

import React, { useRef, useState } from 'react';

export default function App() {
    const inputTextArea=useRef("")
const [para,setPara]=useState("")

  return (
    <div style={{ display: 'flex', height: '700px' }}>
      <textarea 
        style={{ 
          flex: 1, 
          resize: 'none', 
          padding: '10px', 
          fontSize: '16px' 
        }} 
        placeholder="Type here..." 
      ref={inputTextArea}
      onChange={(e)=>{
        console.log("Change");
        
        setPara(e.target.value)}}
       />
      <p 
        style={{ 
          flex: 1, 
          margin: 0, 
          padding: '10px', 
          fontSize: '16px', 
          borderLeft: '1px solid #ccc' 
        }}
      >
        {para}
      </p>
    </div>
  );
}

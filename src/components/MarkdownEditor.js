import { useEffect, useState } from "react"
import React from 'react'

export default function MarkdownEditor() {
    const [para,setPara]=useState("")
  return (
    <div>
        {useEffect((e)=>{
            
            <div  style={{ display: 'flex', height: '700px' }}>      
            <textarea 
        style={{ 
          flex: 1, 
          resize: 'none', 
          padding: '10px', 
          fontSize: '16px' 
        }} 
        placeholder="Type here..." 
    
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
          borderLeft: '1px solid #ccc' ,
          fontSize:"20px",
          fontWeight:"bolder"
        }}
      >
         {para}
      </p>
      </div>
        },[para])}
    </div>
  )
}

import React, { useEffect, useState } from "react";
import "./record.css";

const Record = () => {
  const [isRecording, setIsRecording] = useState(false);


  const data = [
    {
      title: 'The title',
      summary: 'summary'
    },
    {
      title: 'The title',
      summary: 'summary'
    },
    {
      title: 'The title',
      summary: 'summary'
    },
    {
      title: 'The title',
      summary: 'summary'
    },
    {
      title: 'The title',
      summary: 'summary'
    }
  ]

  return <div className="pb-12 min-h-screen" style={{backgroundColor: "white"}}>
    
    <div className='relative h-32'>
      {isRecording ? (
        <button className="record-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
          </svg>
        </button>
      ) : (
        <button className="stop-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        </button>
      )
      }
    </div>
    <div className="h-56 grid grid-cols-3 gap-4 content-start ml-12 mr-12 mt-12">
      
      {data.map((da) => (
        <div style={{backgroundColor: "#3d3f54", borderRadius: "10px", textAlign: "center"}} className='h-48 max-h-full'>
        <h1 className='mt-2'>{da.title}</h1>
        <p className='mt-2 text-ellipsis overflow-hidden'>{da.summary}
        </p>
      </div>
      ))}
    </div>
  </div>
}

export default Record;
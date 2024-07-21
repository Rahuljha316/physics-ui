import React, { useState } from 'react'
const Data = [
    {
        id:1,
        topic: "test1",
        img: "imagesrc1"

    },
    {
        id:2,
        topic: "test2",
        img: "imagesrc"

    },
    {
        id:3,
        topic: "test3",
        img: "imagesrc"

    },
    {
        id:4,
        topic: "test4",
        img: "imagesrc"

    },
    {
        id:5,
        topic: "test5",
        img: "imagesrc"

    },
    {
        id:6,
        topic: "test6",
        img: "imagesrc"

    },
    {
        id:7,
        topic: "test7",
        img: "imagesrc"

    },
]
function Carousal() {
  const [carousal, setCarousal] = useState(Data.slice(0,2))
  const handleNextClick = ( ) => {
    setCarousal(Data.slice(carousal[1].id,(carousal[1].id+2)))
    
  }
  const handlePrevClick = ( ) => {
  
  }
  return (
    <div className='flex gap-12 justify-center'>
        <div onClick={handlePrevClick}>prev</div>
        <div className='flex gap-12'>
        {carousal.map( item => 

            <div key={item.id} className='p-2 border border-black w-40 h-20' >{item.topic}</div>
        )}
        </div>
        <div onClick={handleNextClick}>next</div>

    </div>
    
  )
}

export default Carousal
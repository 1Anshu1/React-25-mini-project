import React, { useEffect, useState } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const images = [
    'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1529680459049-bf0340fa0755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdpcmxzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1616970093071-4b666ea73f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFjdHJlc3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1616970095574-5f53030763d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGFjdHJlc3N8ZW58MHx8MHx8fDA%3D'

]



const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const [currentImg, setCurrentImg] = useState(images[0])
    let active = 'bg-white'

    const handleLeftSlide = () => {
        current > 0 ? setCurrent(current - 1) : setCurrent(images.length - 1)
        setCurrentImg(images[current])
    }

    const handleRightSlide = () => {
        current < images.length - 1 ? setCurrent(current + 1) : setCurrent(0)
        setCurrentImg(images[current])

    }

    useEffect(() => {
        setCurrentImg(images[current])
    }, [current])

    return (
        <div className='flex items-center justify-center relative'>
            <FaArrowCircleLeft className='text-5xl cursor-pointer' onClick={handleLeftSlide} />
            <div className="rounded-3xl w-[600px] h-[500px] ">
                <img src={currentImg} alt="" className='h-[100%] w-[100%] object-cover' />
                <div className="flex justify-center gap-4 my-2 -top-10 relative">
                    {images.map((item, idx) => (
                        <div key={idx} id={idx} className={`h-4 w-4  rounded-full ${current === idx ? active : 'bg-green-500 '}`}>{idx}</div>
                    ))}
                </div>
            </div>
            <FaArrowAltCircleRight className='text-5xl cursor-pointer' onClick={handleRightSlide} />
        </div>
    )
}

export default ImageSlider



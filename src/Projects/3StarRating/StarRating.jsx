import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const StarRating = () => {

    const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    const [idxStar, setIdxStar] = useState(0)
    const [active, setActive] = useState(false)
    const [ind, setInd] = useState(0)

    const handleClick = (e) => {
        setIdxStar(e.target.id)
        setActive(!active)
        setInd(e.target.id)
    }

    const handleMouseEnter = (e) => {
        setIdxStar(e.target.id)
    }

    const handleMouseLeave = () => {
        setIdxStar(0)
        // setActive(false)
    }

    return (
        <div className='h-[100vh] flex justify-center items-center gap-1'>
            {
                arr.map((item, idx) => (
                    <div
                        key={idx}
                        id={idx + 1}
                        className={`text-3xl w-[50px] h-[50px] bg-black rounded-full cursor-pointer ${(idx + 1 <= idxStar) ? 'bg-yellow-400' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    >
                    </div>

                ))
            }
        </div>
    )
}

export default StarRating

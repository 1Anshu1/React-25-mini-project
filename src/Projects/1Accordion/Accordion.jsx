import React, { useState } from 'react'
import data from './data.js'

const Accordion = () => {

    const [state, setState] = useState(null)
    const handleClick = (e) => {

        e === state ? setState(null) : setState(e)

        console.log(e)
    }
    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <div className="w-[400px]">
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="border-2 border-red-600">
                                <div className="flex justify-between ">
                                    <div className="">{item.question}</div>
                                    <button
                                        className="border-2 border-black rounded-md bg-gray-400"
                                        onClick={() => handleClick(item.id)}>open
                                    </button>
                                </div>
                                <div> {item.id === state ? item.answer : ""} </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Accordion

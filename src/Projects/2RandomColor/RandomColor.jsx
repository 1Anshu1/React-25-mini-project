import React, { useState, useEffect, useRef } from 'react'

const RandomColor = () => {

    const bgref = useRef(null)

    const [colorType, setColorType] = useState('HEX Color')
    const [colorValue, setColorValue] = useState('#000000')

    const hexValue = '0123456789ABCDEF'

    const handleHex = () => {
        let temp = ''
        for (let i = 0; i < 6; i++) {
            temp += hexValue[Math.floor(Math.random() * 16)]
        }

        setColorType('HEX Color')
        setColorValue(`#${temp}`)
        bgref.current.style.backgroundColor = colorValue
    }

    const handleRGB = () => {
        setColorValue(`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`)
        setColorType('RGB Color')
        bgref.current.style.backgroundColor = colorValue
    }

    const handleRandom = () => {
        let temp = Math.floor(Math.random() * 2)
        temp ? handleHex() : handleRGB()
    }

    return (
        <div className="w-[100vw] h-[100vh] " ref={bgref}>
            <div className="flex gap-2 my-2 justify-center">
                <button className="bg-slate-300 border-2 border-black p-2" onClick={handleHex}>Create HEX color</button>
                <button className="bg-slate-300 border-2 border-black p-2 " onClick={handleRGB}>Create RGB color</button>
                <button className="bg-slate-300 border-2 border-black p-2" onClick={handleRandom}>Create Random color</button>
            </div>
            <div className="">
                <h2 className="text-center text-3xl mx-auto my-10">{colorType}</h2>
                <h1 className="text-center text-5xl mx-auto my-10">{colorValue}</h1>
            </div>
        </div>
    )
}

export default RandomColor

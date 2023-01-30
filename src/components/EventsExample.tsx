import React, { DragEvent, FC, useRef, useState } from "react";

interface EventsExampleProps {
}

export const EventsExample:FC<EventsExampleProps> = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault
        console.log(value)
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        // console.log(value)
        console.log('DRAG')

    }

    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)

    }
    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')

    }
    return(
        <>
            <div>
                <input type="text" value={value} onChange={changeHandler} placeholder='ruled'/>
                <input type="text" ref={inputRef } placeholder='unruled'/>
                <button onClick={clickHandler}>X</button>
                <div draggable onDrag={dragHandler} style={{width: 200, height: 200, background: 'red'}}></div>
                <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag===true ? 'blue' : 'red', marginTop: 15}}></div>
            </div>
        </>
    )
}
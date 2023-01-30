import React, { useEffect, useState } from "react";

interface ICounter {
    n: number,
    console: (n:number) => void,
}

export const Counter: React.FC<ICounter> = ({n, console}) => {
    const [count, setCount] = useState<number>(0)
    const [num, setNum] = useState<number>(0)

    useEffect(() => {
        setNum(n)
        console(num)

    })

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNum(+event.target.value)
    }

    const addHandler = () => {
        setCount(prev => prev + num)
    }

    const minusHandler = () => {
        setCount(prev => prev - num)
    }


    return(
        <>
            <div className={'m-5 w-25 border border-danger mx-auto bg-light'}>
                <input className={'text-center '} type="number" onChange={changeHandler}/>
                <div className={'mx-auto w-50'}  >
                    <button onClick={addHandler} className={"m-3 btn-floating btn-large waves-effect waves-light red"}>+</button>
                    <button onClick={minusHandler} className="btn-floating btn-large waves-effect waves-light red">-</button>
                    <div className={'mx-auto w-25 text-center m-2'}>{count}</div>
                </div>
            </div>
        </>
    )
}
import React, {FC, useState} from "react";
import classes from './Counter.module.scss'

export const Counter: FC = () => {
    const [counter, setCounter] = useState<number>(0)

    return <div>
        <h1>{counter}</h1>
        <button className={classes.button} onClick={() => setCounter(prev => prev + 1)}>increment</button>
    </div>
}
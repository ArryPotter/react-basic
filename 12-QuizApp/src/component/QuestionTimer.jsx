import { useEffect, useState } from "react";


export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => { setTimeout(onTimeout, timeout); }, [timeout, onTimeout]);


    useEffect(() => {
        console.log('SETTING TIMEOUTPUT')
        const timer = setTimeout(onTimeout, timeout);
        return () => clearTimeout(timer);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('SETTING INTERVAL')
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100);

        return () => {
            clearInterval(interval)
        }
    }, [])

    console.log('aaa')
    return <progress id='question-time' max={timeout} value={remainingTime} />
}
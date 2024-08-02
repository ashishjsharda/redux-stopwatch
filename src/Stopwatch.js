import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start, stop, reset, tick } from './store';

const Stopwatch = () => {
    const time = useSelector((state) => state.stopwatch.time);
    const isRunning = useSelector((state) => state.stopwatch.isRunning);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                dispatch(tick());
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, dispatch]);

    return (
        <div>
            <h1>Stopwatch: {time}s</h1>
            <button onClick={() => dispatch(start())} disabled={isRunning}>Start</button>
            <button onClick={() => dispatch(stop())} disabled={!isRunning}>Stop</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Stopwatch;

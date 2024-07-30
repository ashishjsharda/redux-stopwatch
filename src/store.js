import {createSlice, configureStore} from "@reduxjs/toolkit";
const  initialState={
    time:0,
    isRunning:false
};

//Create a slice
const stopWatchSlice= createSlice(
    {
        name:'stopwatch',
        initialState,
        reducers:{
            start(state){
                state.isRunning=true;
            },
            stop(state){
                state.isRunning=false;
            },
            reset(state){
                state.time=0,
                state.isRunning=false;
            },
            tick(state){
                if(state.isRunning)
                {
                    state.time=state.time+1;
                }
            }
        }
    }
);

export const {start,stop,reset,tick}= stopWatchSlice.actions;
const store=configureStore(
    {
        reducer:{
            stopWatch:stopWatchSlice.reducer
        }
    }
);

export default store;
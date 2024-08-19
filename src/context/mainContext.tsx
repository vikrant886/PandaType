'use client'

import React, { createContext, useState, useContext, useEffect } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const  [type,setType] = useState('time')
    const [isPunctuation,setIsPunctuation] = useState(false);
    const [isNumber,setIsNumber] = useState(false);
    const [time,setTime] = useState(30)
    const [wordLen,setWordLen] = useState(50)

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <EventContext.Provider value={{
            windowSize,setWindowSize,
            type,setType,
            time,setTime,
            wordLen,setWordLen,
            isNumber,setIsNumber,
            isPunctuation,setIsPunctuation
        }}>
            {children}
        </EventContext.Provider>
    );
};

export const mainContext = () => useContext(EventContext);
'use client';

import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import type { MainContextType } from './mainTypes';
import { mainContextDefaults } from './mainTypes';

export const EventContext = createContext<MainContextType>(mainContextDefaults);

interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [type, setType] = useState<string>('time');
    const [isPunctuation, setIsPunctuation] = useState<boolean>(false);
    const [isNumber, setIsNumber] = useState<boolean>(false);
    const [windowSize, setWindowSize] = useState<number>(window?.innerWidth || 0);
    const [time, setTime] = useState<number>(30);
    const [wordLen, setWordLen] = useState<number>(50);

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <EventContext.Provider
            value={{
                windowSize, setWindowSize,
                type, setType,
                time, setTime,
                wordLen, setWordLen,
                isNumber, setIsNumber,
                isPunctuation, setIsPunctuation
            }}
        >
            {children}
        </EventContext.Provider>
    );
};

export const useMainContext = () => useContext(EventContext);
export interface MainContextType {
    setType: (value: string) => void;
    type: string;
    isPunctuation: boolean;
    setIsPunctuation: (value: boolean) => void;
    isNumber: boolean;
    setIsNumber: (value: boolean) => void;
    windowSize: number;
    setWindowSize: (value: number) => void;
    time: number;
    setTime: (value: number) => void;
    wordLen: number;
    setWordLen: (value: number) => void;
}

// Provide a default value (optional)
export const mainContextDefaults: MainContextType = {
    setType: () => { },
    type: 'default',
    isPunctuation: false,
    setIsPunctuation: () => { },
    isNumber: false,
    setIsNumber: () => { },
    windowSize: 0,
    setWindowSize: () => { },
    time: 0,
    setTime: () => { },
    wordLen: 0,
    setWordLen: () => { },
};
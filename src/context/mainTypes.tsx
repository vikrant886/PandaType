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
  
  export const mainContextDefaults: MainContextType = {
    setType: (value: string) => {},
    type: 'time',
    isPunctuation: false,
    setIsPunctuation: (value: boolean) => {},
    isNumber: false,
    setIsNumber: (value: boolean) => {},
    windowSize: 0,
    setWindowSize: (value: number) => {},
    time: 30,
    setTime: (value: number) => {},
    wordLen: 50,
    setWordLen: (value: number) => {},
  };
  
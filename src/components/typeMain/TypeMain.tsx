'use client'

import React, { useEffect, useRef, useState } from 'react'
import genereateSequence from '~/utils/genereateSequence'
import { mainContext } from '~/context/mainContext'

const TypeMain = () => {
    const [textData, setTextData] = useState('');
    const textRef = useRef<HTMLParagraphElement>(null);
    const { isPunctuation, isNumber, time, type, wordLen } = mainContext()

    useEffect(() => {
        let generatedText =" " 
        if(type!=='custom'){
            if(isPunctuation && isNumber){
                generatedText = genereateSequence(36,32,32,wordLen)
            }
            else if(isPunctuation){
                generatedText = genereateSequence(50,50,0,wordLen)
            }
            else if(isNumber) generatedText = genereateSequence(50,0,50,wordLen)
            else generatedText = genereateSequence(100,0,0,wordLen)
        }
        console.log(generatedText)
        setTextData(generatedText);
    }, [isPunctuation,isNumber,time,type,wordLen]);


    return (
        <div className='flex h-[50vh] flex-col justify-center overflow-scroll items-center mt-12'>
            <p className='font-normal text-justify leading-[3rem] overflow-scroll text-neutral-400 text-ellipsis h-[50vh] text-4xl sm:w-[80%] w-full' ref={textRef}>{textData}</p>
        </div>
    );
}

export default TypeMain;

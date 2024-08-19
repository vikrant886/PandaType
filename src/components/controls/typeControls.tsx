'use client'

import React from 'react'
import { AtSign, Hash, Timer, ALargeSmall, Wrench } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { mainContext } from '~/context/mainContext'


const TypeControls = () => {
    const { windowSize } = mainContext()
    const { isPunctuation, setIsPunctuation, isNumber, setIsNumber, time, setTime, type, setType, wordLen, setWordLen } = mainContext()
    const timeChoices = [15, 30, 60, 120]
    const wordLenChoices = [10, 25, 50, 100]


    return (
        <div className='flex w-full h-full items-center justify-center'>
            {windowSize > 700 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                    className='w-auto h-full flex items-center mt-8 justify-center'
                >
                    <div className='rounded-xl flex border-2 border-black p-2 pl-8 pr-8 gap-5'>
                        <motion.div
                            onClick={() => setIsPunctuation(!isPunctuation)}
                            className={`flex ${isPunctuation ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                        >
                            <AtSign />
                            <p>punctuation</p>
                        </motion.div>
                        <motion.div
                            onClick={() => setIsNumber(!isNumber)}
                            className={`flex ${isNumber ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                        >
                            <Hash />
                            <p>number</p>
                        </motion.div>
                        <motion.div className='border-2 border-black rounded-2xl w-0' />
                        <motion.div
                            onClick={() => { setType('time'); setTime(30) }}
                            className={`flex ${type === 'time' ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                        >
                            <Timer />
                            <p>time</p>
                        </motion.div>
                        <motion.div
                            onClick={() => { setType('words'); setWordLen(50) }}
                            className={`flex ${type === 'words' ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                        >
                            <ALargeSmall />
                            <p>words</p>
                        </motion.div>
                        <motion.div
                            onClick={() => { setType('custom'); }}
                            className={`flex ${type === 'custom' ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                        >
                            <Wrench />
                            <p>custom</p>
                        </motion.div>
                        <div className='border-2 border-black rounded-2xl w-0' />
                        {
                            type === 'time' ? (
                                timeChoices && timeChoices.map((val, index) => (
                                    <motion.p
                                        key={index}
                                        className={`${time === val ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                                        onClick={() => setTime(val)}
                                    >
                                        {val}
                                    </motion.p>
                                ))
                            ) : (
                                wordLenChoices && wordLenChoices.map((val, index) => (
                                    <motion.p
                                        key={index}
                                        className={`${wordLen === val ? 'text-[#D9CAB3]' : 'text-[#6D9886]'} hover:text-[#D9CAB3] cursor-pointer gap-2`}
                                        onClick={() => setWordLen(val)}
                                    >
                                        {val}
                                    </motion.p>
                                ))
                            )
                        }
                    </div>
                </motion.div>
            )}
        </div>
    )
}

export default TypeControls
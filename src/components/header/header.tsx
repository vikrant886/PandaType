import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo1.png'
import { Keyboard, User } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='p-6 md:pl-40 items-center justify-center md:pr-40  flex w-full h-24 gap-12'>
            <Link className='w-auto h-full' href={'/'}>
                <Image
                    src={logo}
                    alt='logo'
                    className='md:w-auto  h-[100%]'
                />
            </Link>
            <div className='w-auto cursor-pointer'>
                <Keyboard className='w-full' />
            </div>
            <div className='ml-auto'>
                <Link href={'/login'}>
                    <User className='size-full cursor-pointer' />
                </Link>
            </div>
        </div>
    )
}

export default Header
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='border text-3xl font-mono bg-slate-950 text-sky-300 px-5 w-full fixed'>
            <ul className='flex gap-3'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
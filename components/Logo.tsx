import { PiggyBank } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <a href='/' className='flex items-center gap-2'>
        <PiggyBank className='stroke h-11 w-11 stroke-[#FFCC00]' />
        <p className='text-3xl font-bold leading-tight tracking-tighter text-[#FFCC00]'>Binanco</p>
    </a>
  )
}
export const LogoMob = () => {
  return (
    <a href='/' className='flex items-center gap-2'>
        <p className='text-3xl font-bold leading-tight tracking-tighter text-[#FFCC00]'>Binanco</p>
    </a>
  )
}

export default Logo
import React from 'react'
import ShitCoffee from '@/assets/funny-shit.gif'
import ShitFire from '@/assets/burn-shit.gif'
import Image from 'next/image'

export default function HeroImage() {
    return (
        <Image src={ShitCoffee} alt="Shit Coffee" />
    )
}

export function HeroImage2() {
    return (
        <Image src={ShitFire} alt="Shit Fire" />
    )
}
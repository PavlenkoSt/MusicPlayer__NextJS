import React from 'react'
import s from '../styles/Header.module.scss'
import Image from 'next/image'

const Header = () => {
    return (
        <header className={s.header}>
            <Image
                src='/logo.png'
                width='75'
                height='75'
            />
            <nav className={s.nav}>

            </nav>
        </header>
    )
}

export default Header

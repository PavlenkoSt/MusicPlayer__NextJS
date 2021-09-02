import React from 'react'
import s from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const Header = () => {

    const path = useRouter().pathname

    const links = [
        { link: '/', text: 'Main', active: path === '/' },
        { link: '/track-list', text: 'Track List', active: path === '/track-list' },
        { link: '/upload', text: 'Upload', active: path === '/upload' }
    ]

    const renderLinks = links.map(link => <div key={link.link} className={`${s.link} ${link.active ? s.active : ''}`}>
            <Link href={link.link}>{link.text}</Link>
    </div>)

    return (
        <header className={s.header}>
            <Image
                src='/logo.png'
                width='75'
                height='75'
            />
            <nav className={s.nav}>
                { renderLinks }
            </nav>
        </header>
    )
}

export default Header

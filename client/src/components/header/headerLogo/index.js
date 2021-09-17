
import s from './s.module.css'
import logoImg from 'images/header/logo.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default React.memo(function HeaderLogo() {
    console.log('rener logo');
    return (
        <Link href="/">
            <a>
                <div className={s.logo}>
                    <Image alt="logo" src={logoImg} width="50" height="50" />
                    <div className={s.logoText}>Service24</div>
                </div>
            </a>
        </Link>
    )
})

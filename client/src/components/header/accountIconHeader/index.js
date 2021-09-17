import s from './s.module.css'
import Link from 'next/link'
import React from 'react'

export default React.memo(function AccountIconHeader({ icon, userName, userEmail, url }) {
    return (
        <Link href={url}>
            <a className={s.faceNameBox} >
                <span className={`material-icons ${s.accountIcon}`}>
                    {icon}
                </span>
                <div className={s.accountName}>
                    {userName || userEmail}
                </div>
            </a >
        </Link >
    )
})
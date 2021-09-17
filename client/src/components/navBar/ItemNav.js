import s from './s.module.css'
import Link from 'next/link'

export default function ItemNav({ url, nameMenu, classN = '', metaName = '' }) {
    console.log('item');
    return (
        <li ><Link href={url}><a className={classN}>{nameMenu}<span className={s.metaName}>{metaName}</span></a></Link></li>
    )
}

import s from './s.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

export default function ItemNav({ url, nameMenu, classN = '', metaName = '' }) {
    const router = useRouter()
    const isActive = url === router.pathname ? s.active : ''
    return (
        <li >
            <Link href={url}>
                <a>
                    <span className={isActive}> {nameMenu}</span>
                    {metaName && <span className={classN + ' ' + isActive}>
                        {metaName}
                    </span>}
                </a>
            </Link>
        </li>
    )
}

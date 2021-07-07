import s from 'components/header/navBar/s.module.css'
import { NavLink } from 'react-router-dom'

export default function ItemNav({ url, nameMenu, classN = '', metaName = '' }) {

    return (
        <li><NavLink to={url} className={classN}>{nameMenu}<span className={s.metaName}>{metaName}</span></NavLink></li>
    )
}

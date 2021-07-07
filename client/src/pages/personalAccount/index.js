import s from './s.module.css'

export default function PersonalAccount({ userEmail }) {

    return (<div className={`container ${s.accountPageBox}`}>
        <ul>
            <li>{userEmail} Вы записанны на:</li>
            <li>1 июня на 20:00</li>
        </ul>
    </div>)
}
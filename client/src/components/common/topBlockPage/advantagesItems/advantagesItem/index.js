import s from './s.module.css'

export default function AdvantagesItem({ title, icon }) {

    return (
        <li className={s.advantages}>
            <div className={`${s.advantagesSvg} material-icons`}>
                {icon}
            </div>
            {title}
        </li>
    )
}






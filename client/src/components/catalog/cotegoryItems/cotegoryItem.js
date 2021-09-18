import s from 'components/catalog/s.module.css'
import Image from 'next/image'

export default function CotegoryItem({ img, name, wh, active, keyName, onClick }) {
    const pathImg = require(`images/categories/${img}`)
    const isActive = active === keyName ? s.active : ''
    return (
        <div onClick={onClick} className={s.cotegoryItem + ' ' + isActive}>
            <Image alt={name} src={pathImg.default} width={wh} height={wh} />
            <div className={s.cotegoryName}>{name}</div>
        </div>
    )
}
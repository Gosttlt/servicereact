import s from './s.module.css'
import img from 'images/preloader/preloader.gif'

export default function Preloader({ text = 'Loading...' }) {
    return <div className={s.preloaderBox}><img alt="" src={img} /> {text}</div>
}
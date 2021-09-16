import s from './s.module.css'

export default function Search() {

    return (
        <div className={`container ${s.searchBox}`}>
            <input type="search" className={s.searchInput} placeholder="Укажите какую модель телефона Вы ищите" />
            <div className={`material-icons ${s.icon}`}>search</div>
        </div>
    )
}

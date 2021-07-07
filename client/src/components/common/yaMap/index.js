import s from './s.module.css'

export default function YaMaps() {
    return (
        <div className={s.yaMapBox}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A37101b0ed2f8a98bf10004f27e98c8c9ee45613a5d1bbb7cbc8aabd1253ed64f&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
        </div>
    )
}
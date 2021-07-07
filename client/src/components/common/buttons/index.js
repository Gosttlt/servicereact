import s from './s.module.css'

const Button = ({ onClick, name }) => {
    return (
        <button className={s.button} onClick={onClick}>{name}</button>
    )
}
export default Button
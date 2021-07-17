import s from './s.module.css'

const Input = ({ onChange, placeholder, name, label, value, type = 'text' }) => {
    return (
        <div className={s.inputField}>
            <label htmlFor={name} className={s.label}>{label}:</label>
            <input type={type} value={value} placeholder={placeholder} id={name} name={name} onChange={onChange} />
        </div>
    )
}
export default Input
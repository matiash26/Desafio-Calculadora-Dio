import "./style.css"
const Button = ({label,flex, ...rest}) => {
    return (
        <div className={`btn ${flex} $`}>
            <button type="button" {...rest}>{label}</button>
        </div>
    )
}
export default Button;
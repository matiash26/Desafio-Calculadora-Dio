import "./style.css"
const Button = ({ label = "", flex}) => {
    return (
        <div className={`btn ${flex} $`}>
            <button type="button">{label}</button>
        </div>
    )
}
export default Button;
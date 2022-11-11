import "./index.css"
const Display = ({number}) => {
    return (
        <div className="Display">
            <input type="text" id="Display" value={number} max="16" disabled/>
        </div>
    )
}
export default Display;
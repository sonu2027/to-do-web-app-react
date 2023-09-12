import { GrAddCircle } from "react-icons/gr"
function Input(props) {
    return (
        <div className="input-div">

            <input id="inputTag" type="text" placeholder="Enter your task" onChange={(e) => props.change(e)} value={props.val} />

            <GrAddCircle id="add-icon" onClick={props.click} />

        </div>
    )
}
export default Input
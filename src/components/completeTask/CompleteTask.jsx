import {BsBookmarkCheck} from "react-icons/bs"
function CompleteTask(prop) {
    return (
        <div className="calculating-complete-task">
            <div className="box">{prop.num}</div>
            <BsBookmarkCheck className="bookmark" />
        </div>
    )
}
export default CompleteTask
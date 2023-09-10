import { MdPendingActions } from "react-icons/md"
function PendingTask(prop) {
    return (
        <div className="calculating-pending-task">
            <div className="box">{prop.num}</div>
            <MdPendingActions className="pending" />
        </div>
    )
}
export default PendingTask
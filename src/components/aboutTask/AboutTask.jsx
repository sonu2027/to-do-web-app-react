import "./aboutTask.css"
import { BsBookmarkCheck } from "react-icons/bs"
import { CiCircleRemove } from "react-icons/ci"
import { useEffect, useState } from "react"

function AboutTask(props) {

    console.log("props.task", props.task);
    const [inputVal, setInputVal] = useState()
    console.log("input-val", inputVal);

    useEffect(() => {
        setInputVal(props.task)
    })
    return (
        <>
            <div className="task">
                <div className="list-item">
                    {console.log("input-val", inputVal)}
                    <li>{props.task}</li>
                    <div className="button">
                        <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                        <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                        {console.log("props.id", props.id)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutTask
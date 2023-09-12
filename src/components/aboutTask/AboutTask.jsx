import "./aboutTask.css"
import { FaRegEdit } from "react-icons/fa"
import { BsBookmarkCheck } from "react-icons/bs"
import { CiCircleRemove } from "react-icons/ci"
import { useState } from "react"
import { FiSave } from "react-icons/fi"

function AboutTask(props) {

    const [task, setTask] = useState(true)
    console.log("props.task", props.task);
    const [inputVal, setInputVal] = useState(props.task)
    console.log("input-val", inputVal);

    function handleInputVal(e) {
        setInputVal(e.target.value)
    }
    function handleTask(){
        setTask(true)
    }
    return (
        <>
            <div className="task">

                {
                    task == true ?
                        (<div className="list-item">
                            {console.log("input-val",inputVal)}
                            <li>{props.task}</li>
                            <div className="button">
                                <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                                <FaRegEdit onClick={() => setTask(false)} className="edit-task" />
                                <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                                {console.log("props.id", props.id)}
                            </div>
                        </div>) : 

                        (<div className="input-item">
                            <input type="text" value={inputVal} onChange={handleInputVal} />
                            <div className="button">
                                <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                                <FiSave onClick={handleTask} className="edit-task" />
                                <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                            </div>
                        </div>)
                }

            </div>
        </>
    )
}
export default AboutTask
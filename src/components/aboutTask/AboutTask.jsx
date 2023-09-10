// import { useEffect, useState } from "react"
import "./aboutTask.css"
import { FaRegEdit } from "react-icons/fa"
import { BsBookmarkCheck } from "react-icons/bs"
import { CiCircleRemove } from "react-icons/ci"
import { useState } from "react"
import { FiSave } from "react-icons/fi"
function AboutTask(props) {

    const [task, setTask] = useState(true)
    const [inputVal, setInputVal] = useState(props.task)

    function handleInputVal(e) {
        setInputVal(e.target.value)
    }

    return (
        <>
            <div className="task">

                {task == true ? (<div className="list-item">
                    <li>{inputVal}</li>
                    <div className="button">
                        <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                        <FaRegEdit onClick={() => setTask(false)} className="edit-task" />
                        <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                    </div>
                </div>) : (<div className="input-item">
                    <input type="text" value={inputVal} onChange={handleInputVal} />
                    <div className="button">
                        <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                        <FiSave onClick={() => setTask(true)} className="edit-task" />
                        <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                    </div>
                </div>)}



                {/* <div className="input-item">
                    <li>{props.task}</li>
                    <div className="button">
                        <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                        <FaRegEdit className="operation" />
                        <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                    </div>
                </div> */}
                {/* <div className="list-item">
                    <li>{props.task}</li>
                    <div className="button">
                        <CiCircleRemove className="delete-icon" id={props.id} onClick={() => { props.onSelect(props.id) }} />
                        <FaRegEdit className="edit-task" />
                        <BsBookmarkCheck className="mark-complete" id={props.id} onClick={() => { props.onMark(props.id) }} />
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default AboutTask
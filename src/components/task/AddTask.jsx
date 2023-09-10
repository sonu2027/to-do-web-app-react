import { useState } from "react"
import AboutTask from "../aboutTask/AboutTask"
import "./addTask.css"
import { GrAddCircle } from "react-icons/gr"
import { BsBookmarkCheck } from "react-icons/bs"
import { MdPendingActions } from "react-icons/md"

function AddTask() {
    const [inputValue, setInputValue] = useState("")
    const [task, addTask] = useState([])
    const [taskComplete, setTaskComplete] = useState(0)
    const [taskPending, setTaskPending] = useState(0)

    function handleInputValue(e) {
        setInputValue(e.target.value)
    }
    function handleTask() {
        if (inputValue != "") {
            addTask((state) => {
                return [...state, inputValue]
            })
            setInputValue("")
            setTaskPending(taskPending + 1)
        }
        else{
            alert("Please, write some task to add")
        }
    }

    function deleteItem(id) {
        console.log("Delete");
        addTask((state) => {
            return state.filter((e, i) => {
                return i != id
            })
        })
    }

    function markComplete(id) {
        console.log("Delete");
        addTask((state) => {
            return state.filter((e, i) => {
                return i != id
            })
        })
        setTaskComplete(taskComplete + 1)
    }

    return (
        <div className="add-task-main-div">
            {/* <div className="task-calculating">
                <div className="calculating-pending-task">
                    <div className="box">{taskPending}</div>
                    <MdPendingActions className="pending" />
                </div>
                <div className="calculating-complete-task">
                    <div className="box">{taskComplete}</div>
                    <BsBookmarkCheck className="bookmark" />
                </div>
            </div> */}
            <div className="input">
                <input id="inputTag" type="text" placeholder="Enter your task" onChange={handleInputValue} value={inputValue} />

                <GrAddCircle id="add-icon" onClick={handleTask} /><br />

                <div className="calculating-pending-task">
                    <div className="box">{taskPending}</div>
                    <MdPendingActions className="pending" />
                </div>
                <div className="calculating-complete-task">
                    <div className="box">{taskComplete}</div>
                    <BsBookmarkCheck className="bookmark" />
                </div>
            </div><br />

            <h1>To do</h1>
            {inputValue}


            {task.map((e, i) =>
                <AboutTask onMark={markComplete} onSelect={deleteItem} key={i} task={e} id={i} />
            )}
            <footer>
                Developed by Sonu Mondal !
            </footer>
        </div>
    )
}
export default AddTask
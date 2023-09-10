import { useState } from "react"
import AboutTask from "../aboutTask/AboutTask"
import "./addTask.css"
import { GrAddCircle } from "react-icons/gr"
// import { BsBookmarkCheck } from "react-icons/bs"
import PendingTask from "../pendingTask/PendingTask.jsx"
import CompleteTask from "../completeTask/CompleteTask"
// import { MdPendingActions } from "react-icons/md"

function AddTask() {
    const [inputValue, setInputValue] = useState("")
    const [task, addTask] = useState([])
    const [taskComplete, setTaskComplete] = useState(0)
    const [taskPending, setTaskPending] = useState(0)
    const [appearButton, setAppearButton] = useState(false)

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
            setAppearButton(true)
        }
        else {
            alert("Please, write some task to add")
        }
    }

    function deleteItem(id) {
        addTask((state) => {
            return state.filter((e, i) => {
                return i != id
            })
        })
        setTaskPending(taskPending-1)
        console.log("task", task.length);
        if(task.length==1){
            setAppearButton(false)
        }
    }

    function markComplete(id) {
        console.log("Delete");
        addTask((state) => {
            return state.filter((e, i) => {
                return i != id
            })
        })
        setTaskComplete(taskComplete + 1)
        setTaskPending(taskPending-1)
        console.log("task", task.length);
        if(task.length==1){
            setAppearButton(false)
        }
    }
    function manageTask() {
        addTask([])
        setAppearButton(false)
        setTaskComplete(0)
        setTaskPending(0)
    }
    return (
        <div className="add-task-main-div">
            <div className="input">
                <div className="input-div">
                    <input id="inputTag" type="text" placeholder="Enter your task" onChange={handleInputValue} value={inputValue} />

                    <GrAddCircle id="add-icon" onClick={handleTask} /><br />
                </div>

                <div className="task-status">
                <PendingTask num={taskPending} />
                <CompleteTask num={taskComplete} />
                </div>
            </div><br />

            <h1>To do</h1>
            {inputValue}


            {task.map((e, i) =>
                <AboutTask onMark={markComplete} onSelect={deleteItem} key={i} task={e} id={i} />
            )}
            {appearButton == true ? (
                <button onClick={manageTask} className="reset-button">Reset</button>
            ) : ""}

            <footer>
                Developed by Sonu Mondal
            </footer>

        </div>
    )
}
export default AddTask
import { useState } from "react"
import AboutTask from "../aboutTask/AboutTask"
import "./addTask.css"
import PendingTask from "../pendingTask/PendingTask.jsx"
import CompleteTask from "../completeTask/CompleteTask"
import Input from "../input/Input"

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
        setTaskPending(taskPending - 1)

        if (taskPending == 1 && taskComplete == 0) {
            setAppearButton(false)
        }
    }
    function markComplete(id) {
        addTask((state) => {
            return state.filter((e, i) => {
                return i != id
            })
        })

        setTaskComplete(taskComplete + 1)
        setTaskPending(taskPending - 1)
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
                <Input change={handleInputValue} val={inputValue} click={handleTask} /><br />

                <div className="task-status">
                    <PendingTask num={taskPending} />
                    <CompleteTask num={taskComplete} />
                </div>
            </div><br />

            <h1>To do</h1>
            {inputValue}

            {task.map((e, i) =>
                <AboutTask onMark={markComplete} onSelect={deleteItem} key={i} task={e} id={i} />)}
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
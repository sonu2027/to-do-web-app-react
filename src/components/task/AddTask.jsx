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
    const [completeTaskList, setCompleteTaskList] = useState([])
    // const [taskAdded, setTaskAdded]=useState(false)
    // const [markTask, setMarkTask]=useState(fasle)

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
            // setTaskAdded(true)
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
        console.log("taskPending", taskPending);
        console.log("taskCompleet", taskComplete);

        if (taskPending == 1 && taskComplete == 0) {
            console.log("apearing")
            setAppearButton(false)
        }
    }

    function markComplete(id) {
        console.log("Delete");
        console.log("id for delete is", id);
        let el = ""
        addTask((state) => {
            return state.filter((e, i) => {
                if (i == id) {
                    el = e
                }
                return i != id
            })
        })
        console.log("reaining task is:", task);
        setCompleteTaskList((s) => [...s, el])
        setTaskComplete(taskComplete + 1)
        setTaskPending(taskPending - 1)
    }
    console.log("reaining task is:", task);
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

            {console.log("reaining task is:", task)}
            {task.map((e, i) =>
            <AboutTask onMark={markComplete} onSelect={deleteItem} key={i} task={e} id={i} />)}
            <h1>Completed</h1>
            {completeTaskList.map((e, i) =>
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
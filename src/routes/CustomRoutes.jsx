import { Routes, Route } from "react-router-dom"
import AddTask from "../components/task/AddTask"
function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AddTask />} />
            {/* <Route path="" elments=""/> */}
        </Routes>
    )
}
export default CustomRoutes
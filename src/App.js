import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Add from "./components/add/Add";
import AllStudents from "./components/allStudents/AllStudents";
import Single from './components/pages/singleEdit/Single_edit'
import Private from "./components/auth/Private";
import Login from "./components/auth/Login";


function App() {
  return (
    <div>
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Private />}>
                <Route path="/" element={<Home />} />
                <Route path="/add_students" element={<Add />} />
                <Route path="/all_students" element={<AllStudents />} />
                <Route path="/single_edit/:id" element={<Single/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

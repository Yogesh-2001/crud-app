import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllStudents from "./AllStudents";
import AddStudent from "./AddStudent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllStudents />} />
        <Route path="/create-student" element={<AddStudent />} />
        <Route path="/edit-student/:id" element={<AddStudent />} />
      </Routes>
    </>
  );
}

export default App;

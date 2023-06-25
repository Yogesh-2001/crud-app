import { createContext, useState } from "react";

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  const initialValue = {
    id: 0,
    name: "Yogesh Yewale",
    email: "yogeshyewale2001@gmail.com",
    phoneNo: "9067473970",
  };

  const [students, setStudents] = useState([initialValue]);

  function addStudent(studentObj) {
    setStudents([...students, { ...studentObj, id: students.length }]);
  }

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  function editStudent(id, updatedData) {
    setStudents(
      students.map((student) => (student.id == id ? updatedData : student))
    );
  }

  return (
    <>
      <StudentContext.Provider
        value={{ students, addStudent, deleteStudent, editStudent }}
      >
        {children}
      </StudentContext.Provider>
    </>
  );
};

export default StudentContextProvider;

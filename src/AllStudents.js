import React, { useContext } from "react";
import { StudentContext } from "./store/StudentContext";
import { Link } from "react-router-dom";
const AllStudents = () => {
  const { students, deleteStudent, editStudent } = useContext(StudentContext);
  return (
    <>
      <section className="text-center">
        <Link to={"/create-student"}>
          <button className="btn btn-primary mt-4">
            ADD STUDENT <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </Link>

        <table className="col-6 mt-5 mx-auto table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              return (
                <>
                  <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneNo}</td>
                    <td>
                      <Link to={`/edit-student/${student.id}`}>
                        <i
                          className="fas fa-edit mr-5"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </Link>

                      <i
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteStudent(student.id)}
                        className="fa-sharp fa-solid fa-trash"
                      ></i>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AllStudents;

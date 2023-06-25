import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "./store/StudentContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AddStudent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const { addStudent, students, editStudent } = useContext(StudentContext);

  const [student, setStudent] = useState({
    name: "",
    phoneNo: "",
    email: "",
  });

  useEffect(() => {
    const getStudent = () => {
      students.map((student) => {
        if (student.id == id) {
          setStudent(student);
        }
      });
    };
    getStudent();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (id) {
        editStudent(id, student);
      } else {
        addStudent(student);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="col-6 mx-auto mt-5" onSubmit={handleSubmit}>
        <h2 className="text-center">{id ? "Edit Student" : "Add Student "}</h2>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="enter name"
          />
        </div>
        <div class="form-group">
          <label for="phoneNo">Phone No</label>
          <input
            value={student.phoneNo}
            onChange={(e) =>
              setStudent({ ...student, phoneNo: e.target.value })
            }
            type="number"
            class="form-control"
            id="phoneNo"
            placeholder="Enter phone no"
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        {id ? (
          <button type="submit" class="btn btn-primary">
            EDIT STUDENT
          </button>
        ) : (
          <button type="submit" class="btn btn-primary">
            ADD STUDENT
          </button>
        )}
      </form>
    </>
  );
};

export default AddStudent;

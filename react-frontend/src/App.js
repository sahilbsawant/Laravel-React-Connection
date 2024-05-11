import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getAllStudents() {
      try {
        const students = await axios.get("http://127.0.0.1:8000/api/students");
        // console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudents()
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React </h1>
        {/* {students.map((students, i) => {
          return <h2>{students.name}</h2>;
        })} */}
      </header>
    </div>
  );
}

export default App;

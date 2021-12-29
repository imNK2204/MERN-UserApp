import "./App.css";
import React from 'react';
import axios from "axios";

function App() {
  const fetchUsers = () => {
    axios.get("/api/list").then((res) => console.log(res.data));
  };

  const registerUser = () => {
    axios.post("/api/registration", user).then((res) => console.log(res.data));
  };

  const updateuser = () => {
    axios.put("/api/update/:uname", user).then((res) => console.log(res.data));
  }

  const user = {
    username: "",
    password: "",
    name: "",
    age: 0,
  };

  return (
    <div className="container mt-5">
      <div className="col-12">
        <form>
        <div className="form-group">
          <button className="btn btn-block btn-primary" onClick={fetchUsers}>
            Fetch Users
          </button>
        </div>
        <div className="form-group">
        <input className="form-control"
          placeholder="Username"
          onChange={(e) => (user.username = e.target.value)}
        />
        </div>
        <div className="form-group">
        <input className="form-control"
          placeholder="password"
          onChange={(e) => (user.password = e.target.value)}
        />
        </div>
        <div className="form-group">
        <input className="form-control"
          placeholder="name"
          onChange={(e) => (user.name = e.target.value)}
        />
        </div>
        <div className="form-group">
        <input className="form-control"
          placeholder="age"
          onChange={(e) => (user.age = Number(e.target.value))}
        />
        </div>
        <div className="form-group">
            <button className="btn btn-block btn-primary" onClick={registerUser}>Register</button>
            <button className="btn btn-block btn-primary" onClick={updateuser}>Update</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;

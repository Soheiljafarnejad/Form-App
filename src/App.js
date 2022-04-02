import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    console.log(data);

    setData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={changeHandler}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={changeHandler}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
        />

        <button>Submit</button>
      </form>
    </section>
  );
}

export default App;

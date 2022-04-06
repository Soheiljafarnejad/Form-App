import Signup from "./Components/SignUp/SignUp";
import "./App.css";
import Login from "./Components/Login/Login";

function App() {
  return (
    <main className="app">
      <section className="pages">
        {/* <Signup /> */}
        <Login />
      </section>
      <section className="cover"></section>
    </main>
  );
}

export default App;

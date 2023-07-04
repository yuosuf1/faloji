import "./App.css";
import NavBar from "./components/navbar";

import Sidebar from "./components/sidebar";

function App() {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <NavBar />
      </div>
    </main>
  );
}

export default App;

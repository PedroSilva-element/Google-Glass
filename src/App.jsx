import Header from "./header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="section">
      <Header />
      <Outlet />
    </section>
  );
}

export default App;
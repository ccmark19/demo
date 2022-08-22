import { useEffect, useState } from "react";
import InfoPage from "./pages/info";
import Login from "./views/components/Login/Login";
// import Common from "./utils";
function App() {
  const [pass, setPass] = useState();

  return (
    <div className="App">
      <div className="content">
        {pass === "demo" ? (
          <InfoPage />
        ) : (
          <Login setPass={(txt) => setPass(txt)} />
        )}
      </div>
    </div>
  );
}

export default App;

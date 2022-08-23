import { useEffect, useState } from "react";
import InfoPage from "./pages/info";
import Login from "./views/components/Login/Login";
// import Common from "./utils";
function App() {
  const [pass, setPass] = useState();
  const [acct, setAcct] = useState();

  return (
    <div className="App">
      <div className="content">
        {pass === "demo" && acct === "demo@gmail.com" ? (
          <InfoPage />
        ) : (
          <Login
            setPass={(txt) => setPass(txt)}
            setAcct={(txt) => setAcct(txt)}
          />
        )}
      </div>
    </div>
  );
}

export default App;

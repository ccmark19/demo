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
      <footer class="bg-light text-center text-lg-start">
        <div
          class="text-center p-3 text-white-50"
          style={{ backgroundColor: "#0a2351" }}
        >
          Big Data Research Lab @University of Waterloo
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useRef } from "react";

const Login = ({ setPass, setAcct }) => {
  const passRef = useRef();
  const acctRef = useRef();
  const handleClick = () => {
    const tempInput = passRef.current.value;
    const tempAcct = acctRef.current.value;
    setPass(tempInput);
    setAcct(tempAcct);
  };
  return (
    <div className="form-container">
      <div className="form-signin w-100 m-auto text-center">
        {/* <form> */}
        <div>
          {/* <img className="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              ref={acctRef}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={passRef}
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <input
              className="mx-2"
              type="checkbox"
              value="remember-me"
              placeholder="Remember me"
              id="rmb"
            />
            <label for="rmb" className="text-light">
              Remember me
            </label>
          </div>
          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            onClick={() => handleClick()}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-white">&copy; 2022</p>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;

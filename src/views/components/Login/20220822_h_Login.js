import { useRef } from "react";

const Login = ({ setPass }) => {
  const elRef = useRef();
  const handleClick = () => {
    const tempInput = elRef.current.value;
    setPass(tempInput);
  };
  return (
    <div
      style={{ color: "white" }}
      className="d-flex justify-content-center align-item-center pt-5 align-items-baseline"
    >
      <p>Please enter password</p>
      <div className="d-flex flex-row mx-3">
        <input
          ref={elRef}
          type="text"
          placeholder="Enter password"
          style={{ borderRadius: "5px", border: "none" }}
        />
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;

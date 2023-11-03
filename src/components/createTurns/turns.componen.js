import { useState } from "react";
import "../createTurns/turns.css";
import { InputControl } from "../shared/inputControl/inputControl";

function Turns() {
  const [values, setValues] = useState({
    id: "",
    name: "",
  });

  const handleId = (event) => {
    setValues({ ...values, id: event.target.value });
  };
  const handleName = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  return (
    <>
      <div  className="container-turns">
        <div className="login-form">
          <div className="form-group">
            <InputControl
              type="text"
              placeholder="Identificacion"
              onChange={handleId}
            ></InputControl>
          </div>
          <div className="form-group">
            <InputControl
              placeholder="Nombre"
              onChange={handleName}
            ></InputControl>
          </div>
          <button
            type="submit"
            className="btn btn-light btn-sm rounded btn-style"
          >
            crear turno
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Turns;

import { useState } from "react";
import "../createTurns/turns.css";
import { InputControl } from "../shared/inputControl/inputControl";

function Turns() {
  const [values, setValues] = useState({
    identification: "",
    name: "",
  });
  const apiUrl = "http://localhost:3000/api";

  const handleId = (event) => {
    setValues({ ...values, identification: event.target.value });
  };
  const handleName = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const saveTurn = async () => {
    const responseAddTurn = await fetch(`${apiUrl}/turns/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    return await responseAddTurn.json();
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
           onClick={saveTurn}
            type="submit"
            className="btn btn-primary btn-sm rounded btn-style"
          >
            Crear Turno
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Turns;

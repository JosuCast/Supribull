import { useState } from "react";

export default function FormUsuario() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    prioridad: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(values.name);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: values.name,
        email: values.email,
        prioridad: values.prioridad,
      }),
    };
    fetch("http://localhost:8080/usuario/", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <div>
        <div className="row">
          <div>
            <div>
              <div className="alert alert-info">
                Se ha registrado exitosamente a la aplicación
              </div>
            </div>
            <h1>Regístrate</h1>
            <form onSubmit={handleForm} method="post">
              <div className="form-group">
                <label className="control-label" htmlFor="nombre"></label>
                <input
                  id="nombre"
                  name="name"
                  type="text"
                  values={values.name}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="email"></label>
                <input
                  id="email"
                  name="email"
                  values={values.email}
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="prioridad"></label>
                <input
                  id="prioridad"
                  name="prioridad"
                  values={values.prioridad}
                  type="number"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <button type="submit">Registrar</button>
                <span>Si estas registrado </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

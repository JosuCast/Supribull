import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Register() {
    const [form, setForm] = useState(false);
    useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: values.nombre,
        apellido: values.apellido,
        email: values.email,
        password: values.password,
      }),
    };
    fetch("http://localhost:8080/usuario", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))

    }, [form]);

  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    setForm(true);
    console.log(values);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full ">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          action="/registro"
          onSubmit={handleForm}
          method="POST"
          className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            REGISTRARSE
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">Nombre</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue500 focus:bg-gray-800 focus:outline:none"
              type="text"
              name="nombre"
              onChange={handleInputChange}
              value={values.nombre}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">Apellido</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue500 focus:bg-gray-800 focus:outline:none"
              type="text"
              name="apellido"
              onChange={handleInputChange}
              value={values.apellido}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">Correo</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue500 focus:bg-gray-800 focus:outline:none"
              type="text"
              name="email"
              onChange={handleInputChange}
              value={values.email}
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label htmlFor="">ContraseÃ±a</label>
            <input
              className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue500 focus:bg-gray-800 focus:outline:none"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={values.password}
            />
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

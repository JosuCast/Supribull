import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Alumno() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/usuario/")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  // usuario.create(nombre,email)
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.id}</li>
            <li>{item.nombre}</li>
            <li>{item.email}</li>
          </ul>
        );
      })}
    </div>
  );
}

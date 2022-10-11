import { useEffect, useState } from "react";

export default function Alumno() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/get/datos")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.template}</li>
          </ul>
        );
      })}
    </div>
  );
}

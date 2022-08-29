import { useEffect, useState } from "react";

const Prueba = () => {
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState("Hola mundo");

  useEffect(() => {
    console.log("carga login useEffect 1");
  }, [test]);

  useEffect(() => {
    console.log("carga login useEffect 2");
  }, [test2]);

  useEffect(() => {
    console.log("Mount");

    const a = document.getElementById("ej");
    if (a)
      a.addEventListener("click", () => {
        const b = document.getElementById("otro-elemento");
        b?.setAttribute("class", "funciona");
      });

    return () => {
      console.log("Unmount");
    };
  }, []);

  console.log("carga login 2");

  return (
    <>
      <hr />
      <div id="ej">Prueba</div>
      <hr />

      <div id="otro-elemento">Otro elemento</div>

      <h1>{test}</h1>
      <button onClick={() => setTest((prevState) => prevState + 1)}>
        Sumar test 1
      </button>

      <h1>{test2}</h1>
      <button onClick={() => setTest2(() => "Hola Mundo modificado")}>
        Sumar test 2
      </button>
    </>
  );
};

export { Prueba };

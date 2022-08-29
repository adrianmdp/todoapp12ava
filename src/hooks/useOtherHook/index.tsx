import { useEffect, useState } from "react";

const useOtherHook = () => {
  const [state1, setState1] = useState("Estado 1 del hook");
  const [state2, setState2] = useState();
  const [state3, setState3] = useState();

  useEffect(() => {
    console.log("Primer useEffect");
  }, []);

  useEffect(() => {
    console.log("Segundo useEffect");
  }, [state1]);

  const fx1 = (value: string) => {
    setState1(value);
  };

  const fx2 = () => {
    return null;
  };

  return { state1, fx1, fx2 };
};

export { useOtherHook };

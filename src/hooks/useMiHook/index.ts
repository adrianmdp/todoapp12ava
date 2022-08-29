import { useEffect, useState } from "react";

const useMiHook = () => {
  const [status, setStatus] = useState<"active" | "inactive">("active");

  useEffect(() => {
    console.log("useEffect dentro de hook");
  }, [status]);

  const updateStatus = (value: "active" | "inactive") => {
    setStatus(value);
  };

  return { status, updateStatus };
};

export { useMiHook };

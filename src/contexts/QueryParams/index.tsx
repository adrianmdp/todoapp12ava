import React, { useEffect, useState } from "react";

const { createContext } = React;

const QueryParamsContext = createContext({ queryParams: {} });

const QueryParamsProvider = (/* { children } */) => {
  const [params, setParams] = useState({});

  useEffect(() => {
    setParams(new URLSearchParams(window.location.search));
  }, []);

  return (
    <></>
    // <QueryParamsContext.Provider value={{ params, setParams }}>
    //   {children}
    // </QueryParamsContext.Provider>
  );
};

export { QueryParamsContext, QueryParamsProvider };

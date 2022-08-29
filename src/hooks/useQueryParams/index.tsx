import { useEffect, useState } from "react";

const useQueryParams = () => {
  const [params, setParams] = useState<any>({});

  const get = (key: string) => {
    if (params && params.hasOwnProperty(key)) {
      return params[key.toString()];
    }
    return undefined;
  };

  const getAll = () => {
    Object.keys(params).forEach((key) => {
      if (params[key.toString()] instanceof Array) {
        params[key.toString()] = params[key.toString()].sort(); // Order arrays
      }
    });
    return params;
  };

  const set = (key: string, value: any) => {
    setParams((prevState: any) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    const qryString = Object.keys(params)
      .map((key) => `${key}=${params[key.toString()]}`)
      .join("&");
    if (params !== undefined) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${qryString ? `?${qryString}` : ""}`
      );
    }
  }, [params]);

  return { set, get, getAll };
};

export { useQueryParams };

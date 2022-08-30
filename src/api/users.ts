import { mapToArray } from "../helpers";
import { User, UserPayload } from "../types";

const add = (user: UserPayload) => {
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(user),
  };

  fetch("https://ava-9f390-default-rtdb.firebaseio.com/users.json", options);
};

const getAll = async (): Promise<User[]> => {
  const response = await fetch(
    "https://ava-9f390-default-rtdb.firebaseio.com/users.json"
  );
  const data = await response.json();

  return mapToArray(data);
};

const get = async (id: string) => {
  const response = await fetch(
    `https://ava-9f390-default-rtdb.firebaseio.com/users/${id}.json`
  );
  const data = await response.json();

  return data;
};

const remove = () => {};

const patch = async (id: string, payload: Partial<User>) => {
  const options: RequestInit = {
    method: "PATCH",
    body: JSON.stringify(payload),
  };

  const response = await fetch(
    `https://ava-9f390-default-rtdb.firebaseio.com/users/${id}.json`,
    options
  );

  const data = await response.json();

  return data;
};

export const usersApi = { add, getAll, get, remove, patch };

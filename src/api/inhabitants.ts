import { mapToArray } from "../helpers";
import { Inhabitant } from "../types";

const add = async (inhabitant: Inhabitant) => {
  const options: RequestInit = {
    method: "POST",
    body: JSON.stringify(inhabitant),
  };

  await fetch(
    "https://ava-9f390-default-rtdb.firebaseio.com/inhabitants.json",
    options
  );
};

const getAll = async (): Promise<Inhabitant[]> => {
  const response = await fetch(
    "https://ava-9f390-default-rtdb.firebaseio.com/inhabitants.json"
  );
  const data = await response.json();

  return mapToArray(data);
};

const get = async (id: string): Promise<Inhabitant> => {
  const response = await fetch(
    `https://ava-9f390-default-rtdb.firebaseio.com/inhabitants/${id}.json`
  );
  const data = await response.json();

  return data;
};

export const inhabitantsApi = { add, getAll, get };

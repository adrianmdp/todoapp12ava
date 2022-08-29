export type User = {
  id: string;
  name: string;
  email: string;
};

export type UserPayload = Omit<User, "id"> & { pass: string };

export type Inhabitant = {
  id?: number;
  name: string;
  thumbnail?: string;
  age?: number;
  weight?: number;
  height?: number;
  hair_color?: string;
  professions?: string[];
  friends?: string[];
};

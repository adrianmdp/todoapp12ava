import { useEffect, useState } from "react";
import { inhabitantsApi } from "../../api";
import { Layout } from "../../components";
import { inhabitants } from "../../data/inhabitants-short";
import { Inhabitant } from "../../types";

const Admin = () => {
  const [selected, setSelected] = useState<Inhabitant[]>([]);

  const [fetching, setFetching] = useState(false);

  const handleClick = (inhabitant: Inhabitant) => {
    setFetching(true);

    inhabitantsApi.add(inhabitant).then(() => {
      setFetching(false);
    });

    inhabitantsApi.getAll().then((response) => setSelected(response));
  };

  useEffect(() => {
    if (!fetching)
      inhabitantsApi.getAll().then((response) => setSelected(response));
  }, [fetching]);

  return (
    <Layout page="admin">
      <h1>Admin</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Acción</th>
            <th>id</th>
            <th>name</th>
            <th>thumbnail</th>
            <th>age</th>
            <th>weight</th>
            <th>height</th>
            <th>hair_color</th>
            <th>professions</th>
            <th>friends</th>
          </tr>
        </thead>
        <tbody>
          {inhabitants.map((inhabitant) => (
            <tr key={inhabitant.name}>
              <td>
                <button onClick={() => handleClick(inhabitant)}>
                  Agregar a la BD
                </button>
              </td>
              <td>{inhabitant.id}</td>
              <td>{inhabitant.name}</td>
              <td>{inhabitant.thumbnail}</td>
              <td>{inhabitant.age}</td>
              <td>{inhabitant.weight}</td>
              <td>{inhabitant.height}</td>
              <td>{inhabitant.hair_color}</td>
              <td>
                <ul>
                  {inhabitant.professions?.map((prof) => (
                    <li key={inhabitant.name + prof}>{prof}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {inhabitant.friends?.map((friend) => (
                    <li key={inhabitant.name + friend}>{friend}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export { Admin };

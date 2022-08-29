import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { inhabitantsApi } from "../../api";
import { Layout } from "../../components";
import { useMiHook } from "../../hooks";
import { Inhabitant } from "../../types";

const Inhabitants = () => {
  const [inhabitants, setInhabitants] = useState<Inhabitant[]>();

  useEffect(() => {
    inhabitantsApi.getAll().then((data) => {
      setInhabitants(data);
    });
  }, []);

  const { status, updateStatus } = useMiHook();

  if (!inhabitants) return <>Cargando...</>;

  return (
    <Layout>
      <h2> {status}</h2>

      <button onClick={() => updateStatus("inactive")}>Desactivar</button>

      <hr />
      <h1>Inhabitants</h1>
      <table border={1}>
        <thead>
          <tr>
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
                <Link to={`/inhabitants/${inhabitant.id}`}>
                  {inhabitant.id}
                </Link>
              </td>
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

export { Inhabitants };

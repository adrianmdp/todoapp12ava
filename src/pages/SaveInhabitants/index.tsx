import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { inhabitantsApi } from "../../api";
import { useQueryParams } from "../../hooks/useQueryParams";
import { Inhabitant } from "../../types";

const initialData = {
  name: "",
  height: 0,
  weight: 0,
};

const SaveInhabitant = () => {
  const { id } = useParams();

  const [inhabitant, setInhabitant] = useState<Inhabitant>(initialData);

  useEffect(() => {
    console.log(inhabitant);
  }, [inhabitant]);

  // useEffect(() => {
  //   id &&
  //     inhabitantsApi.get(id).then((response) => {
  //       setInhabitant(response);
  //     });
  //   }
  // }, []);

  const { getAll, get, set } = useQueryParams();

  useEffect(() => {
    if (get("name").length < 3) return;

    // productsApi.get(getAll())
    //   .then(result => {
    //     setProducts(result)
    //   })
  }, [getAll]);

  return (
    <div>
      Formulario para guardar inhabitants
      <br />
      <br />
      <div>
        <label htmlFor="">Nombre</label>

        <input
          type="text"
          value={get("name")}
          onChange={(e) => set("name", e.target.value)}
        />

        <input
          type="checkbox"
          value={get("permitidos")}
          onChange={(e) => set("permitidos", e.target.checked)}
        />

        <input
          type="text"
          name="name"
          value={inhabitant?.name}
          onChange={(e) =>
            setInhabitant((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Altura</label>
        <input
          type="text"
          name="height"
          value={inhabitant?.height}
          onChange={(e) =>
            setInhabitant((prevState) => ({
              ...prevState,
              height: e.target.value,
            }))
          }
        />
      </div>
      <div>
        <label htmlFor="">Peso</label>
        <input
          type="text"
          name="weight"
          value={inhabitant?.weight}
          onChange={(e) =>
            setInhabitant((prevState) => ({
              ...prevState,
              weight: e.target.value,
            }))
          }
        />
      </div>
      <button type="submit">Enviar</button>
    </div>
  );
};

export { SaveInhabitant };

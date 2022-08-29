import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { inhabitantsApi } from "../../api";
import { Inhabitant as InhabitantType } from "../../types";

const Inhabitant: FC = () => {
  const { id } = useParams();

  const [inhabitant, setInhabitant] = useState<InhabitantType>();

  useEffect(() => {
    id &&
      inhabitantsApi.get(id).then((data) => {
        setInhabitant(data);
      });
  }, [id]);

  return (
    <div>
      {JSON.stringify(inhabitant)}
      <img src={inhabitant?.thumbnail} alt={inhabitant?.name} />
    </div>
  );
};

export { Inhabitant };

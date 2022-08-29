import { useContext } from "react";
import { Layout } from "../../components";
import { Prueba2Context } from "../../contexts";
import { Test } from "../../Test";
import { Test2 } from "../../Test2";

const Home = () => {
  const myContext = useContext(Prueba2Context);

  console.log(myContext);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Test />
        <Test2 />
      </div>
    </Layout>
  );
};

export { Home };

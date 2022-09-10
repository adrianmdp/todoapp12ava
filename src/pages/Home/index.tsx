import { useContext } from "react";
import { Layout } from "../../components";
import { Prueba2Context } from "../../contexts";
import { withAuth } from "../../hoc";
import { Test } from "../../Test";
import { Test2 } from "../../Test2";

const HomePage = () => {
  const myContext = useContext(Prueba2Context);

  // console.log(myContext);

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

export const Home = withAuth(HomePage);

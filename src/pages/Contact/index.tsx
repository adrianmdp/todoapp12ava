import { Layout } from "../../components";

const Contact = () => {
  return (
    <Layout>
      <form action="">
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="">Foto</label>
          <input type="file" name="foto" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Layout>
  );
};

export { Contact };

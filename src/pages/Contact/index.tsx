import { Layout } from "../../components";

const Contact = () => {
  const handleSubmit = () => {
    // Acá enviamos el formulario a la api
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" name="asunto" />
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

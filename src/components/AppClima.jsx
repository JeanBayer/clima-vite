import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";
import Error from "./Error";
import CardFavorito from "./CardFavorito";

const AppClima = () => {
  const { resultado, cargando, error, listaFavoritos } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Spinner />
        ) : resultado?.name ? (
          <Resultado />
        ) : (
          error && <Error />
        )}
      </main>
      <section className="section_favoritos">
        {Object.values(listaFavoritos).length > 0 &&
          listaFavoritos.map((lugar) => (
            <CardFavorito key={lugar.id} resultado={lugar} />
          ))}
      </section>
    </>
  );
};

export default AppClima;

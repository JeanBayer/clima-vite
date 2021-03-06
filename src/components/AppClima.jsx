import { useEffect } from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";
import Error from "./Error";
import CardFavorito from "./CardFavorito";

const AppClima = () => {
  const {
    resultado,
    cargando,
    error,
    listaFavoritos,
    eliminarClima,
    actualizarClima,
  } = useClima();

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
      {Object.values(listaFavoritos).length > 0 && (
        <section className="section">
          <img
            src="/assets/icon/icon_refresh.png"
            className="boton"
            onClick={actualizarClima}
          />
          <section className="section_favoritos">
            {listaFavoritos.map((lugar) => (
              <CardFavorito
                key={lugar.id}
                resultado={lugar}
                eliminarClima={eliminarClima}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default AppClima;

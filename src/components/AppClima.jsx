import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";
import Error from "./Error";

const AppClima = () => {
  const { resultado, cargando } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? <Spinner /> : resultado?.name ? <Resultado /> : <Error></Error>}
      </main>
    </>
  );
};

export default AppClima;

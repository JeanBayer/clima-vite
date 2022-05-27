import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";

const AppClima = () => {
  const { resultado, cargando } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};

export default AppClima;

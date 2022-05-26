import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {resultado?.name && <Resultado resultado={resultado} />}
      </main>
    </>
  );
};

export default AppClima;

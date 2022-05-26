import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  console.log({ resultado });
  const { name } = resultado;
  return (
    <div className="contenedor">
      <h2>El clima de {name} es:</h2>
    </div>
  );
};

export default Resultado;

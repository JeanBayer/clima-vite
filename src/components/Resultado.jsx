import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  console.log({ resultado });
  const { name, main } = resultado;

  const toCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };
  return (
    <div className="contenedor clima">
      <h2>El clima de {name} es:</h2>
      <p>
        {toCelsius(main.temp)} <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Minima: {toCelsius(main.temp_min)} <span>&#x2103;</span>
        </p>
        <p>
          Maxima: {toCelsius(main.temp_max)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;

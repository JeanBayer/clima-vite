import useClima from "../hooks/useClima";
import { CLIMA } from "../helpers/climas";

const Resultado = () => {
  const { resultado, guardarClima } = useClima();
  const { name, main, weather } = resultado;
  const { id } = weather[0];
  const toCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };
  const backgroundUrl = CLIMA.filter((clima) => clima.id.includes(id))[0].url;
  return (
    <div
      className="fondo"
      style={{
        backgroundImage: `url(/assets/img/${backgroundUrl})`,
      }}
    >
      <div className="clima">
        <img
          src="/assets/icon/icon_add.png"
          className="boton"
          onClick={() => {
            guardarClima(resultado);
          }}
        />
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
    </div>
  );
};

export default Resultado;

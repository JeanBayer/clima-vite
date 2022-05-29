const CardFavorito = ({ resultado, eliminarClima }) => {
  const { name, main } = resultado;
  const toCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  return (
    <div className="card_clima">
      <img
        src="/assets/icon/icon_delete.png"
        className="boton"
        onClick={() => eliminarClima(resultado.id)}
      />
      <h2>{name}</h2>
      <h3>
        {toCelsius(main.temp)} <span>&#x2103;</span>
      </h3>
    </div>
  );
};

export default CardFavorito;

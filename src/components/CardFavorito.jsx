const CardFavorito = ({ resultado }) => {
  const { name, main, weather } = resultado;
  return (
    <div className="card_clima">
      <h2>{name}</h2>
    </div>
  );
};

export default CardFavorito;

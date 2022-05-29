import { useState, useEffect } from "react";
import useClima from "../hooks/useClima";
import { countriesCode } from "../helpers/countriesCode";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    console.log({ countriesCode });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlerta("");
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <input
            list="pais"
            name="pais"
            value={pais}
            onChange={datosBusqueda}
          />
          <datalist id="pais">
            {countriesCode.map((country) => (
              <option key={country.Code} value={country.Code}>
                {country.Name}
              </option>
            ))}
          </datalist>
        </div>
        <input type="submit" value="consulta clima" />
      </form>
    </div>
  );
};

export default Formulario;

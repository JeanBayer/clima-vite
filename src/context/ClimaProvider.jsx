import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async (datos) => {
    setCargando(true);
    setError(false);
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=${1}&appid=${appId}`;
      console.log({ url });
      const { data } = await axios.get(url);
      const { lat, lon } = data[0];

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: dataClima } = await axios.get(urlClima);
      setResultado(dataClima);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setCargando(false);
    }
  };

  const guardarClima = (clima) => {
    console.log({ clima });
    const existe = listaFavoritos.find((favorito) => favorito.id === clima.id);
    if (existe) {
      return;
    }
    setListaFavoritos([...listaFavoritos, clima]);
  };

  const eliminarClima = (id) => {
    const listaFavoritosActualizada = listaFavoritos.filter(
      (favorito) => favorito.id !== id
    );
    setListaFavoritos(listaFavoritosActualizada);
  };

  return (
    <ClimaContext.Provider
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        error,
        guardarClima,
        eliminarClima,
        listaFavoritos,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };

export default ClimaContext;

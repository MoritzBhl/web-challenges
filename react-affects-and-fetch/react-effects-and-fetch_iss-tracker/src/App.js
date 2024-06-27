import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [count, setCount] = useState(0);

  function handlerCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(URL);
      console.log();
      const data = await response.json();
      setCoords({ longitude: data.longitude, latitude: data.latitude });
    }

    getISSCoords();
    const interval = setInterval(handlerCount, 5000);

    function removeInterval() {
      clearInterval(interval);
    }

    return removeInterval;

    // return () => {
    //   clearInterval(interval);
    // };
  }, [count]);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={handlerCount}
      />
    </main>
  );
}

import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: false, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: false, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handletoggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  const lightsTurnedOn = lights.map((light) => light.isOn);
  const lightsCount = lightsTurnedOn.reduce((acc, count) => acc + count);

  function handleToggleAllLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function handleToggleAllLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={lightsCount === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        toggleLight={handletoggleLight}
        isOn={lights.isOn}
        name={lights.name}
        lights={lights}
        ligthsCount={lightsCount}
        onToggleAllLightsOn={handleToggleAllLightsOn}
        onToggleAllLightsOff={handleToggleAllLightsOff}
      />
    </Layout>
  );
}

import { ApiComponent } from "./02_api/02_fetch-then";
import { AxiosCallComponent } from "./02_api/03_axios";
import { EmojiContainer } from "./02_api/04_github-emoji";
import { Container } from "./03_data-component/01_rendering-component";
import { Weather } from "./03_data-component/02_weather-promise";
import WeatherAsyncComponent, { Weather2 } from "./03_data-component/03_weather-async";
import PokemonComponent from "./03_data-component/poki-mon";

function App() {
  return (
   <>
   {/* <ApiComponent/> */}
   {/* <AxiosCallComponent/> */}
   {/* <EmojiContainer/> */}
   {/* <Container/> */}
   {/* <Weather/> */}
   {/* <WeatherAsyncComponent/> */}
   <PokemonComponent/>
   </>
  );
}

export default App;

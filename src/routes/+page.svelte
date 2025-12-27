<script>
  import DetailsToday from "$lib/components/DetailsToday.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ForecastDaily from "$lib/components/ForecastDaily.svelte";
  import ForecastHourly from "$lib/components/ForecastHourly.svelte";
  import OthersDetails from "$lib/components/OthersDetails.svelte";

  const API_KEY = import.meta.env.VITE_META_API_KEY;

  let dataWeather = $state(null);
  let dataLocation = $state(null);

  let { city } = $props();

  import { page } from "$app/stores";

  let DEFAULT_LAT = 42.88;
  let DEFAULT_LON = -8.54;
  let DEFAULT_IMG = '/assets/cities/Santiago_de_Compostela.png';
  let DEFAULT_NAME = 'Santiago de Compostela';

  // leer la store como runa
  let pageStore = $state(null);

  $effect(() => {
    const unsub = page.subscribe((value) => {
      pageStore = value;
    });
    return () => unsub();
  });

  // valores derivados de la URL
  let lat = $derived(
    Number(pageStore?.url.searchParams.get("lat")) || DEFAULT_LAT
  );

  let lon = $derived(
    Number(pageStore?.url.searchParams.get("lon")) || DEFAULT_LON
  );

  let locationImg = $derived(
    pageStore?.url.searchParams.get("img") || DEFAULT_IMG
  );

  let locationName = $derived(
    pageStore?.url.searchParams.get("name") || DEFAULT_NAME
  );

  //Datos hoxe
  async function obtenerDatos(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro ao obter os datos do tempo:", error);
      return null;
    }
  }

  $effect(async () => {
    const [weather, forecast] = await Promise.all([obtenerDatos(lat, lon)]);
    dataWeather = weather;
    dataLocation = {
      lat: lat,
      lon: lon,
    };
  });

  // Función para obter a data actual en galego
  function obterDataActual() {
    const data = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return data.toLocaleDateString("es-ES", options);
  }
</script>

{#if dataWeather}
  <div class="weather-app">
    <main class="weather-app__main">
      <section class="weather-card">
        <div class="row">
          <div class="col s12">
            <header class="weather-card__header">
              <p class="weather-card__city">{locationName}</p>
              <p class="weather-card__date">{obterDataActual()}</p>
            </header>
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="weather-card__current">
              <div class="weather-card__icon-wrapper">
                <img
                  src="/assets/weather/{dataWeather.weather[0].icon}.gif"
                  class="weather-card__icon"
                  alt="Icono do tempo"
                  aria-hidden="true"
                />
              </div>
              <p class="weather-card__temperature">
                {Math.round(dataWeather.main.temp)}°
              </p>
              <p class="weather-card__description">
                {dataWeather.weather[0].description}
              </p>
              <p class="weather-card__range">
                <span class="weather-card__range-max"
                  >Max. {Math.round(dataWeather.main.temp_max)}°</span
                >
                <span class="weather-card__range-separator">|</span>
                <span class="weather-card__range-min"
                  >Min. {Math.round(dataWeather.main.temp_min)}°</span
                >
              </p>
            </div>
          </div>
        </div>

        <figure class="weather-card__landmark">
          <img
            src={locationImg}
            alt="Catedral de Santiago de Compostela"
            class="weather-card__landmark-image"
          />
        </figure>

        <DetailsToday
          feelsLike={dataWeather.main.feels_like}
          humidity={dataWeather.main.humidity}
          wind={dataWeather.wind.speed}
        ></DetailsToday>
      </section>
    </main>
  </div>
  <section class="weather-card__forecast">
    <header class="weather-card__forecast-header">
      <p class="weather-card__forecast-title">Pronóstico por horas</p>
    </header>

    <ForecastHourly {dataLocation}></ForecastHourly>
  </section>
  <section class="weather-card__forecast">
    <header class="weather-card__forecast-header">
      <p class="weather-card__forecast-title">Pronóstico por días</p>
    </header>

    <ForecastDaily {dataLocation}></ForecastDaily>
  </section>

  <section class="weather-card__details">
    <header class="weather-card__forecast-header">
      <p class="weather-card__forecast-title">Detalles</p>
    </header>

    <div class="weather-card__details--container">
      <OthersDetails {dataWeather} {dataLocation}></OthersDetails>
    </div>
  </section>

  <Footer></Footer>
{/if}

<style>
  .weather-app {
    background:
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(51, 51, 51, 0.95) 100%
      ),
      url(/assets/fondoToday.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom-left-radius: 47px;
    border-bottom-right-radius: 47px;
    min-height: 651px;
  }

  .weather-app__main {
    padding: 3rem;
  }

  .weather-card__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .weather-card__city {
    font-weight: 600;
    color: var(--color-primary);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .weather-card__date {
    font-size: 1rem;
    font-weight: 600;
  }

  .weather-card__current {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .weather-card__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .weather-card__icon {
    width: 132px;
  }

  .weather-card__temperature {
    font-size: 4.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .weather-card__description {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .weather-card__range {
    font-size: 1rem;
    font-weight: 600;
  }

  .weather-card__landmark {
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(
      rgba(255, 255, 255, 0.133) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    padding: 1rem;
    filter: drop-shadow(0px 18px 20px rgba(255, 255, 255, 0.133));
  }

  .weather-card__landmark-image {
    /* max-width: 100%; */
    width: 294px;
  }

  /* Forecast */

  .weather-card__forecast {
    padding-top: 1rem;
  }

  .weather-card__forecast-header {
    margin: 1rem 0px;
  }

  .weather-card__forecast-title {
    color: var(--color-secondary);
    font-size: 1rem;
    font-weight: 600;
    padding-left: 27px;
  }

  .weather-card__forecast-title::before {
    content: url(/assets/sun-light.svg);
    width: 12px;
    margin-right: 10px;
  }

  .weather-card__details {
    padding-top: 1rem;
  }

  .weather-card__details--container {
    padding: 0px 27px;
  }
</style>

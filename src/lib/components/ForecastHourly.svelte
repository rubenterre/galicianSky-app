<script>
  let { dataLocation } = $props();

	let lat = dataLocation.lat;
	let lon = dataLocation.lon;

  const API_KEY = import.meta.env.VITE_META_API_KEY;

  // Estado reactivo para los resultados
  let dataResults = $state(null);

  async function obtenerPronosticoHoras(lat, lon) {
    const url =
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataHoras = await response.json();
      console.log('Respuesta de forecast API:', dataHoras);
      // Nos quedamos con la lista
      return dataHoras.list;
    } catch (error) {
      console.error('Erro ao obter os datos do tempo por horas:', error);
      return null;
    }
  }

  $effect(() => {
    if (lat && lon) {
      obtenerPronosticoHoras(lat, lon).then((result) => {
        dataResults = result;
        console.log('dataResults:', dataResults);
      });
    }
  });
</script>

{#if dataResults && dataResults.length > 0}
  <div class="weather-card__forecast-list">
	      {#each dataResults as weather}

    <div class="weather-card__forecast-container weather-card__forecast-item--active">
        <div class="weather-card__forecast-item">
          <span class="weather-card__forecast-hour">
            {new Date(weather.dt * 1000).getHours().toString().padStart(2, '0')}h
          </span>
          <img
            class="weather-card__forecast-icon"
            src={`/assets/weather/${weather.weather[0].icon}.gif`}
            alt="Icono do tempo"
          />
          <span class="weather-card__forecast-temp">
            {Math.round(weather.main.temp)}°
          </span>
        </div>
    </div>
	      {/each}

  </div>
{:else}
  <p class="weather-card__p">Cargando pronóstico por horas...</p>
{/if}


<style>
	.weather-card__forecast-list {
		gap: 10px;
		overflow-x: auto;
		white-space: nowrap;
		padding: 0px 27px;

		&::-webkit-scrollbar {
			display: none;
		}

		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.weather-card__forecast-list .weather-card__forecast-container {
		width: 47px;
		height: 83px;
		border-radius: 27px;
		border: 1px solid var(--color-primary);
		background-color: var(--color-tertiary);
		display: inline-block;
		margin-right: 10px;
	}

	.weather-card__forecast-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 10px 0px;
	}

	.weather-card__forecast-hour {
		font-size: 0.8rem;
		color: var(--color-primary);
	}

	.weather-card__forecast-icon {
		width: 30px;
	}

	.weather-card__forecast-temp {
		color: var(--color-secondary);
		font-size: 0.8rem;
	}

	.weather-card__p{
		text-align: center;
	}
</style>

<script>
  let { dataLocation } = $props();

	let lat = dataLocation.lat;
	let lon = dataLocation.lon;

  const API_KEY = import.meta.env.VITE_META_API_KEY;

  let dataResults = $state(null);
  let dailyForecast = $state([]); // solo 5 días

  async function obtenerPronosticoHoras(lat, lon) {
    const url =
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}` +
      `&appid=${API_KEY}&units=metric&lang=gl`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dataHoras = await response.json();
      return dataHoras.list;
    } catch (error) {
      console.error('Erro ao obter os datos do tempo por horas:', error);
      return null;
    }
  }

  function agruparPorDia(list) {
    if (!list) return [];

    const porDia = new Map();

    for (const item of list) {
      const date = new Date(item.dt * 1000);
      // clave YYYY-MM-DD
      const key = date.toISOString().slice(0, 10);

      if (!porDia.has(key)) {
        porDia.set(key, []);
      }
      porDia.get(key).push(item);
    }

    // para cada día sacamos un resumen (ej: temp max/min del día)
    const dias = Array.from(porDia.entries()).map(([date, items]) => {
      const tempsMax = items.map((i) => i.main.temp_max);
      const tempsMin = items.map((i) => i.main.temp_min);
      const temp_max = Math.max(...tempsMax);
      const temp_min = Math.min(...tempsMin);
      const primero = items[0];

      return {
        date,
        temp_max,
        temp_min,
        icon: primero.weather[0].icon,
        description: primero.weather[0].description
      };
    });

    // ordenar por fecha y quedarse con 5
    dias.sort((a, b) => a.date.localeCompare(b.date));
    return dias.slice(0, 5);
  }

  $effect(() => {
    if (lat && lon) {
      obtenerPronosticoHoras(lat, lon).then((result) => {
        dataResults = result;
        dailyForecast = agruparPorDia(result);
      });
    }
  });

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('gl-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'short'
    });
  }
</script>


<div class="weather-card__forecast-list">
  {#if dailyForecast && dailyForecast.length > 0}
    {#each dailyForecast as day}
      <div class="weather-card__forecast-item">
        <div class="weather-card__forecast-date">
          <p class="weather-card__forecast-day">
            {formatDate(day.date).split(',')[0]}
          </p>
          <p class="weather-card__forecast-date">
            {formatDate(day.date).split(',')[1]}
          </p>
        </div>
        <div class="weather-card__forecast-temperatures">
          <p class="weather-card__forecast-tempmax">
            {Math.round(day.temp_max)}º
          </p>
          <p class="weather-card__forecast-tempmin">
            {Math.round(day.temp_min)}º
          </p>
        </div>
        <img
          class="weather-card__forecast-icon"
          src={`/assets/weather/${day.icon}.gif`}
          alt="Icono do tempo"
        />
        <div class="weather-card__forecast-description">
          <p class="weather-card__forecast-text-description">
            {day.description}
          </p>
        </div>
      </div>
    {/each}
  {:else}
    <p class="weather-card__p">Cargando pronóstico por días...</p>
  {/if}
</div>


<style>
	.weather-card__forecast-list {
		padding: 0px 27px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.weather-card__forecast-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 5px;
		border-radius: 27px;
		border: 1px solid var(--color-primary);
		background-color: var(--color-tertiary);
		padding: 10px 15px;
	}

	.weather-card__forecast-day {
		font-size: 0.9rem;
		color: var(--color-secondary);
		min-width: 60px;
	}

	.weather-card__forecast-item:first-child .weather-card__forecast-day{
		font-weight: 700;
	}

	.weather-card__forecast-date {
		color: var(--color-primary);
		font-size: 0.8rem;
	}

	.weather-card__forecast-tempmax {
		font-size: 0.8rem;
	}

	.weather-card__forecast-tempmin {
		font-size: 0.8rem;
		color: var(--color-primary);
	}

	.weather-card__forecast-icon {
		width: 30px;
	}

	.weather-card__forecast-description {
		overflow: hidden;
		white-space: nowrap;
		min-width: 90px;

	}

	.weather-card__forecast-text-description {
		font-size: 10px;
		display: inline-block;
		padding-left: 100%;
		animation: marquee 10s linear infinite;
	}

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>

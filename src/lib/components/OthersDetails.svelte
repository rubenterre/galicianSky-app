     <script>

        import pressure  from "$lib/assets/icons/pressure.svg";
        import visibility from "$lib/assets/icons/visibility.svg";
        import UV from "$lib/assets/icons/uv.svg";
        import sunset from "$lib/assets/icons/sunset-arrow-down.svg";
        import sunrise from "$lib/assets/icons/sunrise-arrow-up.svg";

    let { dataWeather, dataLocation } = $props();

    let lat = dataLocation.lat;
	let lon = dataLocation.lon;

    let dataResultsUV = $state(null);

    	//Datos hoxe para UV
	async function obtenerDatosUV(lat, lon) {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max&forecast_days=1`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const dataUV = await response.json();
			return dataUV;
		} catch (error) {
			console.error('Erro ao obter os datos do tempo:', error);
			return null;
		}
	}

  $effect(() => {
    if (lat && lon) {
      obtenerDatosUV(lat, lon).then((result) => {
        dataResultsUV = result;
        console.log('dataUV:', dataResultsUV);
      });
    }
  });

      </script>
     

      <section class="weather-card__details">
     {#if dataWeather}
        <div class="weather-card__detail weather-card__detail--feels">
          <img src="{pressure}" alt="Icono de presión atmosférica" class="weather-card__detail-icon weather-card__detail-icon--feels" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{dataWeather.main.pressure}hPa</span>
            <span class="weather-card__detail-label">Presión</span>
          </div>
        </div>

        <div class="weather-card__detail weather-card__detail--humidity">
          <img src="{visibility}" alt="Icono de visibilidade" class="weather-card__detail-icon weather-card__detail-icon--humidity" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{(dataWeather.visibility) / 1000}km</span>
            <span class="weather-card__detail-label">Visibilidade</span>
          </div>
        </div>
      {/if}
       {#if dataResultsUV}
        <div class="weather-card__detail weather-card__detail--wind">
          <img src="{UV}" alt="Icono de indice UV" class="weather-card__detail-icon weather-card__detail-icon--wind" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{Math.round(dataResultsUV.daily.uv_index_max[0])}/10</span>
            <span class="weather-card__detail-label">Índice UV</span>
          </div>
        </div>
         {/if}
      </section>
     
      <section class="weather-card__sun-position">

        <div class="weather-card__sun-details">
            <img src="{sunrise}" alt="Icono de amancer" class="weather-card__detail-icon weather-card__detail-icon--wind" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{new Date(dataWeather.sys.sunrise * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}h</span>
            <span class="weather-card__detail-label">Amanecer</span>
          </div>
        </div>

        <div class="weather-card__sun-details">
                      <img src="{sunset}" alt="Icono do solpor" class="weather-card__detail-icon weather-card__detail-icon--wind" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{new Date(dataWeather.sys.sunset * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}h</span>
            <span class="weather-card__detail-label">Solpor</span>
          </div>
        </div>

      </section>




      <style>

.weather-card__details{
    width: 100%;
    height: 83px;
    background: linear-gradient( 180deg , rgba(0, 0, 0, 0) 0% , rgba(1, 5, 8, 1) 100% );
    border-radius: 27px;
    border: 1px solid var(--color-primary);
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.weather-card__detail{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
}

.weather-card__detail-text{
    display: flex;   
    flex-direction: column;
    align-items: center;
    gap: .3rem;
}


.weather-card__detail-label{
    color: var(--color-primary);
    font-size: .8rem;
}

/* Sun Position */

.weather-card__sun-position{
    display: flex;
    justify-content: space-between;
    gap: 27px;
    align-items: center;
    margin: 27px 0px;
}

.weather-card__sun-details{
    background: linear-gradient( 180deg , rgba(0, 0, 0, 0) 0% , rgba(1, 5, 8, 1) 100% );
    border-radius: 27px;
    border: 1px solid var(--color-primary);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 2rem;
}
      </style>
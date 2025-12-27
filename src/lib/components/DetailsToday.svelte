      <script>

        import feelsLikeIcon  from "$lib/assets/icons/thermometer-list.svg";
        import humidityIcon from "$lib/assets/icons/droplet-percent.svg";
        import windIcon from "$lib/assets/icons/wind.svg"

        let { feelsLike, humidity, wind } = $props();

      </script>
      
      
      
      
      <section class="weather-card__details">
        <div class="weather-card__detail weather-card__detail--feels">
          <img src="{feelsLikeIcon}" alt="Icono de sensación térmica" class="weather-card__detail-icon weather-card__detail-icon--feels" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{Math.round(feelsLike)}º</span>
            <span class="weather-card__detail-label">Sensación</span>
          </div>
        </div>

        <div class="weather-card__detail weather-card__detail--humidity">
          <img src="{humidityIcon}" alt="Icono de humedad" class="weather-card__detail-icon weather-card__detail-icon--humidity" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{humidity}%</span>
            <span class="weather-card__detail-label">Humidade</span>
          </div>
        </div>

        <div class="weather-card__detail weather-card__detail--wind">
          <img src="{windIcon}" alt="Icono de velocidad del viento" class="weather-card__detail-icon weather-card__detail-icon--wind" aria-hidden="true">
          <div class="weather-card__detail-text">
            <span class="weather-card__detail-value">{wind}km/h</span>
            <span class="weather-card__detail-label">Vento</span>
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
      </style>
<script>
  let { city } = $props();
  import { goto } from '$app/navigation';

  const cidades = [
    {
      id: 'santiago',
      icon: '/assets/minicities/Santiago_de_Compostela.png',
      name: 'Santiago de Compostela',
      img: '/assets/cities/Santiago_de_Compostela.png',
      lat: 42.88,
      lon: -8.54
    },
    {
      id: 'vilagarcia',
      icon: '/assets/minicities/Vilagarcia_de_Arousa.png',
      name: 'Vilagarcía de Arousa',
      img: '/assets/cities/Vilagarcia_de_Arousa.png',
      lat: 42.59,
      lon: -8.76
    },
    {
      id: 'vigo',
      icon: '/assets/minicities/Vigo.png',
      name: 'Vigo',
      img: '/assets/cities/Vigo.png',
      lat: 42.24,
      lon: -8.72
    },
    {
      id: 'coruna',
      icon: '/assets/minicities/ACoruna.png',
      name: 'A Coruña',
      img: '/assets/cities/ACoruna.png',
      lat: 43.37,
      lon: -8.40
    },
    {
      id: 'pontevedra',
      icon: '/assets/minicities/Pontevedra.png',
      name: 'Pontevedra',
      img: '/assets/cities/Pontevedra.png',
      lat: 42.43,
      lon: -8.64
    },
    {
      id: 'lugo',
      icon: '/assets/minicities/Lugo.png',
      name: 'Lugo',
      img: '/assets/cities/Lugo.png',
      lat: 43.01,
      lon: -7.56
    }
  ];

  function selectCity(lat, lon, img, name) {
    city = { lat, lon, img, name };

    const params = new URLSearchParams({ lat, lon, img, name });
    goto(`/?${params.toString()}`); 
  }
</script>

<section class="locations">
  <div class="locations__hero">
    <img
      src="/assets/galicianSky_logo.svg"
      alt="Logo de GalicianSky"
      class="locations__logo"
    />
    <div class="locations__title">
      <h2 class="locations__h2">GalicianSky</h2>
      <p class="locations__p">O tempo de Galicia</p>
    </div>
  </div>

  <div class="locations__container">
    {#each cidades as c}
      <button
        type="button"
        class="locations__button"
        on:click={() => selectCity(c.lat, c.lon, c.img, c.name)}
      >
        <img class="locations__icon" src={c.icon} alt={c.name} />
        <h4 class="locations__h4">{c.name}</h4>
      </button>
    {/each}
  </div>
</section>


<style>
    .locations{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }

    .locations__hero{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .locations__logo{
        min-width: 106px;
    }

    .locations__title{
        text-align: center;
    }

    .locations__h2{
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .locations__p{
        font-size: 1rem;
        margin-bottom: 15px;
    }

    .locations__container{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
        width: 100%;

    }

    .locations__button{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        width: 100%;
        border: 1px solid var(--color-primary);
        border-radius: 27px;
        height: 60px;
        padding-left: 30px;
        background: linear-gradient( 180deg , rgba(80, 80, 80, 0.48) 0% , rgba(1, 5, 8, 1) 100% );
    }

    .locations__icon{
        max-height: 36px;
    }

    .locations__h4{
        color: var(--color-secondary);
        font-size: 1rem;
    }
</style>
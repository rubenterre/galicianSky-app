<script>
  import Footer from "$lib/components/Footer.svelte";
  import logo from "$lib/assets/Ruben_Terre_Logo_blanco_131119.svg";
  import behance from "$lib/assets/socials/behance-square-brands_white.svg";
  import github from "$lib/assets/socials/github-square-brands_white.svg";
  import linkedin from "$lib/assets/socials/linkedin-brands_white.svg";

  const links = [
    {
      name: "Política de privacidade e GDPR",
      url: "/privacidade",
    },
    {
      name: "Aviso legal",
      url: "/legal",
    },
    { name: "Términos y condiciones de uso", 
      url: "/terminos", 
    },
  ];
</script>

<div class="about">
  <div class="about__header">
    <img
      class="about__app-logo"
      src="/assets/galicianSky_logo.svg"
      alt="Logo de GalicianSky"
    />
  </div>

  <section class="about__section">
    <div class="about__content">
      <h4 class="about__title">GalicianSky</h4>
      <p class="about__version">Versión 1.0.0</p>

      <p class="about__text">
        Esta aplicación está susentada pola base de datos de OpenWeatherMaps que
        recomenda a roupa que podes vestir en función do tempo que fai na cidade
        seleccionada.
      </p>

      <div class="about__logo-wrapper">
        <img class="about__logo" src={logo} alt="logo Rubén Terré" />
      </div>

      <p class="about__text">
        Desenvolto por <strong>Rubén Terré</strong>. Para máis información sobre
        os meus traballos visita a miña web en
        <a class="about__a" href="https://www.rubenterre.com"
          >www.rubenterre.com</a
        > ou a través dos seguintes canais:
      </p>

      <div class="about__socials">
        <div class="about__social">
          <a href="https://www.behance.net/rubenterre">
            <img class="about__social-icon" src={behance} alt="Behance link" />
          </a>
        </div>
        <div class="about__social">
          <a href="https://github.com/rubenterre">
            <img class="about__social-icon" src={github} alt="Github link" />
          </a>
        </div>
        <div class="about__social">
          <a href="https://www.linkedin.com/in/rubenterrelameiro">
            <img
              class="about__social-icon"
              src={linkedin}
              alt="Linkedin link"
            />
          </a>
        </div>
      </div>

      <div class="about__buttons">
        {#each links as link}
          <a href={link.url} class="about__button">
            <h4 class="about__h4">{link.name}</h4>
          </a>
        {/each}
      </div>

      <p class="about__updates-title">
        <strong class="about__updates-title-text">
          Actualizacións nas que estamos a traballar
        </strong>
      </p>

      <ul class="about__updates-list">
        <li class="about__updates-item">1- Melloras xerais da aplicación</li>
        <li class="about__updates-item">2- Sistema de alertas meterolóxicas</li>
        <li class="about__updates-item">3- Melloras no deseño</li>
      </ul>

      <h4 class="about__title">MIT License</h4>

      <p class="about__version">
        Copyright (c) 2020 Rubén Terré - Diseño & Desarrollo web
      </p>

      <p class="about__license-text">
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
      </p>

      <p class="about__license-text">
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
      </p>

      <p class="about__license-text">
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </section>
</div>

<Footer />

<style>
  .about {
    background-color: var(--color-tertiary);
    min-height: 100%;
    width: 100vw;
    padding: 2rem;
  }

  /* cabecera / logo app */
  .about__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 0;
  }

  .about__app-logo {
    width: 80px;
  }

  /* sección principal */

  .about__content {
    max-width: 800px;
    margin: 0 auto;
  }

  /* textos principales */
  .about__title {
    color: var(--color-secondary);
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-top: 2rem;
  }

  .about__version {
    color: var(--color-secondary);
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 1rem;
  }

  .about__text {
    color: var(--color-secondary);
    font-size: 1rem;
    font-weight: 300;
    text-align: left;
  }

  .about__a {
    color: var(--color-primary);
  }

  /* logo autor */
  .about__logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .about__logo {
    width: 40%;
  }

  /* redes sociales */
  .about__socials {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .about__social {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about__social-icon {
    width: 60px;
  }

  /* Links de links de legal */

  .about__buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .about__button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    height: 60px;
    background: linear-gradient(
      180deg,
      rgba(80, 80, 80, 0.48) 0%,
      rgba(1, 5, 8, 1) 100%
    );
  }

  .about__h4 {
    color: var(--color-secondary);
    font-size: 1rem;
  }

  /* actualizaciones */
  .about__updates-title {
    padding-top: 40px;
    text-align: left;
  }

  .about__updates-title-text {
    color: var(--color-secondary);
    font-size: 1rem;
    font-weight: 600;
  }

  .about__updates-list {
    color: var(--color-secondary);
    font-size: 13px;
    font-weight: 300;
    text-align: left;
    list-style: disc;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
  }

  .about__updates-item {
    margin-bottom: 0.25rem;
  }

  /* licencia */
  .about__license-text {
    color: var(--color-secondary);
    font-size: 11px;
    font-weight: 300;
    text-align: left;
    padding-top: 20px;
  }
</style>

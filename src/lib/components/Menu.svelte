<script>
  // índice del activo según el orden en el DOM
  let active = 0;

  const items = [
    { href: '/',          icon: '/assets/galicianSky_logo.svg', label: 'Inicio' },
    { href: '/profile',   icon: '/assets/profile_icon.svg',     label: 'Perfíl' },
    { href: '/locations', icon: '/assets/locations_icon.svg',   label: 'Cidades' },
    { href: '/shop',      icon: '/assets/shop_icon.svg',        label: 'Tenda' }
  ];
</script>

<div class="menu">
  <div class="menu__container">
    <!-- blob que se mueve -->
    <div class="menu__highlight" style={`--index:${active}`}></div>

    {#each items as item, i}
      <a
        href={item.href}
        class="menu__a"
        class:menu__a--active={i === active}
        on:click={() => (active = i)}
      >
        <img class="menu__img" src={item.icon} alt={item.label} />
        <p class="menu__p">{item.label}</p>
      </a>
    {/each}
  </div>
</div>


<style>
.menu {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: min(360px, 90%);
  padding: 6px;
  border-radius: 999px;

  background: rgba(10, 10, 12, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  display: flex;
}

.menu__container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
}

/* blob líquido */
.menu__highlight {
  position: absolute;
  inset: 4px;
  width: calc((100% - 35px) / 4);  /* 4 botones, resta gap total (3*10px) */
  border-radius: 999px;
/*   background: radial-gradient(circle at top, #f5e0b0 0%, #f0b25a 60%);
 */
 background: var(--color-primary);  
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8);
  z-index: 0;

  transform: translateX(calc(var(--index) * (100% + 10px)));
  transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1);
}

.menu__a {
  position: relative;
  z-index: 1;
  flex: 1;
  border-radius: 999px;
  padding: 8px 0;
  background: transparent;
  border: none;
  color: #f5e0b0;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-decoration: none;
  transition: color 0.25s ease, transform 0.25s ease;
}

.menu__a--active {
  color: #141414;
  transform: translateY(-1px);
}

.menu__a--active .menu__img {
  filter: invert(100%);
}

.menu__a--active .menu__p {
  color: #141414;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
}

.menu__p {
  color: var(--color-secondary);
  font-size: 0.8rem;
  text-align: center;
}

.menu__img {
  height: 25px;
}

</style>

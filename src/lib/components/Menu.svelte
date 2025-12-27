
<div class="menu">
	<div class="menu__container">
        <a href="/profile" class="menu__a menu__a--active">
			<img class="menu__img" src="/assets/galicianSky_logo.svg" alt="Icono de inicio" />
			<p class="menu__p">Inicio</p>
		</a>
		<a href="/profile" class="menu__a">
			<img class="menu__img" src="/assets/profile_icon.svg" alt="Icono de perfil" />
			<p class="menu__p">Perfíl</p>
		</a>
		<a href="/locations" class="menu__a">
			<img class="menu__img" src="/assets/locations_icon.svg" alt="Icono de localizaciones" />
			<p class="menu__p">Cidades</p>
		</a>
		<a href="/shop" class="menu__a">
			<img class="menu__img" src="/assets/shop_icon.svg" alt="Icono de tienda" />
			<p class="menu__p">Tenda</p>
		</a>
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
		/* border: 1px solid var(--color-primary); */
        backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);

		display: flex;
		justify-content: space-between;
		gap: 4px;
	}

	.menu__a {
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
	}

	.menu__a--active {
		background: radial-gradient(circle at top, #f5e0b0 0%, #f0b25a 60%);
		color: #141414;
        text-decoration: underline;

        & .menu__img {
		height: 25px;
        filter: invert(100%);
	    }

        & .menu__p {
		color: #141414;
        font-weight: 600;
		font-size: 0.8rem;
		text-align: center;
	}
	}

	.menu__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
        width: 100%;
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

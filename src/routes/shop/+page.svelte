<script>

</script>

<section class="shop">

    <div class="shop__search">
        <input class="shop__input" type="search" name="buscar" id="buscar" placeholder="Buscar roupa e complementos">
        <button class="shop__button" type="submit">
            <img class="shop__icon-search" src="/assets/search_icon.svg" alt="Icono de buscar">
        </button>
    </div>

    <div class="shop__filters">
        <button class="shop__filter">
            Filtros
        </button>
    </div>

    <div class="shop__hero">
        <h2 class="shop__h2">
            Suxerencia de outfit para hoxe
        </h2>
        <p class="shop__p">
            A partir do tempo actual en <br> 
            <span class="shop__span">Santiago de Compostela</span>
        </p>
    </div>

    <div class="shop__cards">

        <div class="shop__card">
            <div class="shop__img-product">
                <img class="shop__img" src="/assets/products/levis_ejemplo.webp" alt="Icono de buscar">
            </div>
            <div class="shop__details">
                <div class="shop__header">
                <h3 class="shop__h3">
                    Pantalón vaquero con decoraciones
                </h3>
                <p class="shop__brand">Levis</p>
                </div>
                <div class="shop__footer">
                    <div class="shop__price">
                        <p class="shop__title">
                            Precio apróx.
                        </p>
                        <h4 class="shop__h4">
                            87€
                        </h4>
                    </div>
                    <div class="shop__button-buy">
                        <a href="" class="shop__a--buy">
                            <img src="/assets/cart_icon.svg" alt="Icono de comprar" class="shop__icon-buy">
                            <p class="shop__buy-text">COMPRAR</p>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    </div>

</section>


<style>

.shop{
    width: 100vw;
    padding: 2rem;

}

.shop__search{
    width: 100%;
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    padding: 5px 5px 5px 15px;
    display: flex;
    justify-content: space-between;
}

.shop__input{
    background: var(--color-tertiary);
    color: var(--color-secondary);
    border: 0;
    width: 80%;
}

.shop__input::placeholder{
    color: var(--color-secondary);
}

.shop__button{
    background: var(--color-primary);
    border-radius: 100%;
    width: 41px;
    height: 41px;
}

.shop__icon-search{
    height: 18.78px;
}


.shop__filters{
    padding: 1.5rem 0px;
}


.shop__filter{
    background-color: var(--color-primary);
    color: var(--color-tertiary);
    border-radius: 27px;
    padding: 5px 25px;
}

.shop__hero{
    padding-bottom: 1rem;
}

.shop__h2{
    font-size: 1.3rem;
}

.shop__p{
    font-size: 1rem;
    margin-top: .5rem;
}

.shop__span{
    color: var(--color-primary);
}


.shop__cards{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.shop__card{
    border: 1px solid var(--color-primary);
    border-radius: 27px;
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.shop__img-product{
    width: 130px;
    height: 130px;
    background-color: var(--color-secondary);
    border-radius: 27px;
    aspect-ratio: 1 / 1;
}

.shop__img{
    max-width: 100%;
    background-color: var(--color-secondary);
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 17px;

}

.shop__details{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 5px 0px;
}

.shop__header{
    width: 100%;
}

.shop__h3{
    font-size: .8rem;
}

.shop__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.shop__title{
    color: var(--color-primary);
    font-size: .8rem;
}

.shop__h4{
    font-size: 1.5rem;
    font-weight: 700;
}

.shop__a--buy{
    background: var(--color-primary);
    border-radius: 17px;
/*     width: 45px;
    height: 45px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 80px;
    padding: 3px 0px;

}

.shop__buy-text{
    color: var(--color-tertiary);
    font-size: .8rem;
    font-weight: 600;
}


</style>
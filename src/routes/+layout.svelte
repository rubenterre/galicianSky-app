<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Menu from '$lib/components/Menu.svelte';
	let { children } = $props();
	import '../app.scss';

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Menu></Menu>

<style>

:global(*) {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

:global(html){
	font-size: 14px;
	scroll-behavior: smooth;
}

@font-face{
	font-family: Montserrat;
	src: "/fonts/Montserrat-VariableFont_wght.ttf";
}

:root{
	--font-primary: Montserrat;
	--color-primary: #ECC988;
	--color-secondary: #FFFFFF;
	--color-tertiary: #010508;

}

:global(body) {
 background: var(--color-tertiary) ;
 color: var(--color-secondary) ;
 -webkit-font-smoothing: antialiased;
}

:global(body, input, button) {
 font-family: var(--font-primary);
}

:global(button) {
 cursor: pointer;
}
</style>
<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();

	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Magic Ball</title>
</svelte:head>

<div class="flex h-screen w-screen flex-col justify-center">
	<div class="flex-1">
		{@render children()}
	</div>

	<Footer />
</div>

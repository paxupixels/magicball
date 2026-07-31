<script>
	let { answer } = $props();

	import { fade } from 'svelte/transition';
</script>

<p class="px-2 font-serif text-2xl italic" transition:fade={{ duration: 2000 }}>{answer}</p>

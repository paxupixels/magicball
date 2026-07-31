<script>
	let { answer } = $props();

    import { fade } from 'svelte/transition';
</script>

<!-- TODO: Antworten animieren, rein- und rausfaden lassen-->
<p class="px-2 font-serif text-2xl italic" transition:fade={{ duration: 2000 }}>{answer}</p>

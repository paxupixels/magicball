<script>
	// BINDINGS NOCHMAL ANSCHAUEN
	let { value = $bindable('') } = $props();
</script>

<input
	type="text"
	class="w-full max-w-160 rounded-md border px-2 py-1 shadow-lg"
	placeholder="Stelle eine Frage..."
	bind:value
/>

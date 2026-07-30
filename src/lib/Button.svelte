<script>
	let { text, onclick } = $props();
</script>

<button
	class="h-10 w-60 rounded-lg bg-blue-500 text-white shadow-lg hover:cursor-pointer hover:bg-blue-600"
	{onclick}>{text}</button
>

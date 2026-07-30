<script>
	import Ball from '$lib/Ball.svelte';
	import TextFieldInput from '$lib/TextFieldInput.svelte';
	import Button from '$lib/Button.svelte';
	import Answer from '$lib/Answer.svelte';

    import { giveRandomAnswer } from '$lib/randomAnswer';
	let answer = $state();
    let question = $state("");
</script>

<!-- TODO: Responsive machen für large screens -->
<div class="flex h-full flex-col items-center justify-center gap-6">
	<!-- Hauptcontainer -->
	<Answer {answer} />
	<Ball />
	<div class="flex w-full flex-col items-center justify-center gap-6 px-12">
		<TextFieldInput bind:value={question}/>
		<Button text="FRAGEN" onclick={() => {
           answer = giveRandomAnswer();
           question = "";
		}} />
	</div>
</div>

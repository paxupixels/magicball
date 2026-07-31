<script>
	import Ball from '$lib/Ball.svelte';
	import TextFieldInput from '$lib/TextFieldInput.svelte';
	import Button from '$lib/Button.svelte';
	import Answer from '$lib/Answer.svelte';

	import { giveRandomAnswer } from '$lib/randomAnswer';
	let answer = $state();
	let question = $state('');

	// Ball Animation
	let isSpinning = $state(false);

	// BUG: Wenn man öfter drückt, resetted sich der Timer nicht, dadurch wird die nächste Animation früher abgebrochen
	function ballAnimation() {
		isSpinning = true;
		setTimeout(
			() => {
				isSpinning = false;
			},
			0.7 * 3 * 1000
		);
	}

	// Text Animation
	let answerShown = $state(false);

	function answerAnimation() {
		answerShown = true;
		setTimeout(
			() => {
				answerShown = false;
			},
			0.7 * 3 * 1000
		);
	}
</script>

<div class="flex h-full flex-col items-center justify-center gap-6">
	<!-- Hauptcontainer -->
	<div class="min-h-8">
		{#if answerShown}
			<Answer {answer} />
		{/if}
	</div>
	<Ball bind:isSpinning />
	<form
		class="flex w-full flex-col items-center justify-center gap-6 px-12"
		onsubmit={() => {
			answer = giveRandomAnswer();
			question = '';
			ballAnimation();
			answerAnimation();
		}}
	>
		<TextFieldInput bind:value={question} />
		<Button text="FRAGEN" onclick="" />
	</form>
</div>

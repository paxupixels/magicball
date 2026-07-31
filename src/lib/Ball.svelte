<script>
	import Ball from '$lib/assets/ball.png';

	let { isSpinning = $bindable(false) } = $props();
</script>

<img src={Ball} alt="Ball" class="w-70" class:ball-anim={isSpinning} />

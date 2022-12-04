<script lang="ts">
	import { onMount } from "svelte";

	import Wadokei from "./components/Wadokei.svelte";

	let time = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<main>
	<Wadokei {time} latitude={51.93410472914457} longitude={8.868428487177423} />
</main>

<style lang="scss">

</style>

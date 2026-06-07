<script lang="ts">
	import { onMount } from 'svelte';

	import Wadokei from './components/Wadokei.svelte';

	let time = new Date();
	let longitude = 8.868428487177423;
	let latitude = 51.93410472914457;

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});

	function setLocation(): void {
		navigator.geolocation.getCurrentPosition((position) => {
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
		});
	}
</script>

<main>
	<Wadokei {time} {latitude} {longitude} />
</main>

<button on:click={setLocation}>set location</button>

<style lang="scss">
</style>

<script lang="ts">
	// Imports
	import HLine from "../Wadokei/HLine.svelte";
	import VLine from "../Wadokei/VLine.svelte";

	// Props
	export let angle: number;
	export let radius: number;


	$: distanceBetweenTicks = angle / 10;

</script>

<g
	class="ticks">

	<HLine {angle} radius={radius + 50} />

	<VLine angle={-angle / 2} radius1={radius} radius2={radius+50} />
	<VLine angle={angle / 2} radius1={radius} radius2={radius+50} />


	{#each Array(5) as _, index}
		<VLine angle={distanceBetweenTicks * index} radius1={radius} radius2={radius+50} />
		<VLine angle={-distanceBetweenTicks * index} radius1={radius} radius2={radius+50} />
	{/each}

</g>

<style lang="scss">
</style>

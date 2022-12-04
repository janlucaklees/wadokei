<script lang="ts">
	// Imports
	import HLine from "../Wadokei/HLine.svelte";
	import VLine from "../Wadokei/VLine.svelte";

	// Props
	export let angle: number;
	export let radius1: number;
	export let radius2: number;

	export let amount: number;

	$: distanceBetweenTicks = angle / amount;

	$: halfAngle = angle / 2;
	$: startAngle = -halfAngle;

</script>

<g
	class="ticks">

	<HLine {angle} radius={radius1} />
	<HLine {angle} radius={radius2} />

	<VLine angle={-halfAngle} radius1={radius1} radius2={radius2} />
	<VLine angle={halfAngle} radius1={radius1} radius2={radius2} />

	{#each Array(amount) as _, index}
		<VLine angle={startAngle + distanceBetweenTicks * index} radius1={radius1} radius2={radius2} />
	{/each}

</g>

<style lang="scss">
</style>

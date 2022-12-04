<script lang="ts">
	// Types

	// Imports
	import dateToRadians from "../lib/dateToRadians";
	import VLine from "./Wadokei/VLine.svelte";

	// Props
	export let time: Date;
	export let radius: number;


	$: angle = dateToRadians(time) + Math.PI;
</script>

<path
	d="M 0 -{radius + 125} L 50 -{radius + 75} L 0 -{ radius + 25} L -50 -{radius + 75} Z"
	style={`transform: rotate(${angle}rad);`}>
</path>

<style lang="scss">
</style>

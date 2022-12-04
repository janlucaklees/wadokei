<script lang="ts">
	// Types

	// Imports
	import dateToRadians from "../lib/dateToRadians";

	// Props
	export let time: Date;
	export let radius: number;


	$: angle = dateToRadians(time) + Math.PI;
</script>

<line
	x1="0"
	y1="0"
	x2="0"
	y2={`-${radius}`}
	stroke="red"
	style={`transform: rotate(${angle}rad);`}>
</line>

<style lang="scss">
</style>

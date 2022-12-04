<script lang="ts">
	// Imports
	import generateRadiusSegment from "../../lib/generateRadiusSegment.js";

	// Props
	export let angle: number;
	export let radius1: number;
	export let radius2: number;
</script>

<path
	stroke="black"
	stroke-width="8"
	fill="transparent"
	d={`M ${generateRadiusSegment(angle, radius1, radius2)}`}>
</path>

<style lang="scss">
</style>

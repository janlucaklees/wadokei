<script lang="ts">
	// Imports
	import generateCircleSectionPath from "../../lib/generateCircleSectionPath.js";

	// Props
	export let angle: number;
	export let radius: number;
</script>

<path
	stroke="black"
	stroke-width="8"
	fill="transparent"
	d={`M ${generateCircleSectionPath(angle, radius)}`}>
</path>

<style lang="scss">
</style>

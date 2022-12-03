<script lang="ts">
	// Types

	// Imports
	import dateToDegrees from "../lib/dateToDegrees";

	// Props
	export let time: Date;


	$: angle = dateToDegrees(time) + 180;
</script>

<line
	x1="0"
	y1="0"
	x2="0"
	y2="-350"
	stroke="red"
	style={`transform: rotate(${angle}deg);`}>
</line>

<style lang="scss">
</style>

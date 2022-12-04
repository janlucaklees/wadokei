<script lang="ts">
	// Props
	import secondsToRadians from "../lib/secondsToRadians";

	// Components
	import Ticks from "./Period/Ticks.svelte";
	import VLine from "./Wadokei/VLine.svelte";
	import HLine from "./Wadokei/HLine.svelte";

	export let hour: number;
	export let radius: number;


	$: angle = secondsToRadians(60 * 60);
	$: halfAngle = angle / 2;
	$: startAngle = secondsToRadians(hour * 60 * 60) + (angle / 2) + Math.PI;
</script>

<g
	class={`hour`}
	style={`transform: rotate(${startAngle}rad);`}>

	<Ticks {angle} radius1={radius+100} radius2={radius + 150} amount={5} />

	<VLine angle={-halfAngle} radius1={radius+100} radius2={radius+200} />
	<VLine angle={halfAngle} radius1={radius+100} radius2={radius+200} />

	<HLine
		id="time"
		stroke="transparent"
		angle={angle}
		radius={radius+250} />

	<text
		style="transform: rotate({-halfAngle}rad)"
		class="zodiac__sign">
		<textPath
			startOffset="50%"
			text-anchor="middle"
			alignment-baseline="middle"
			xlink:href="#time">
			{hour}:00
		</textPath>
	</text>


</g>

<style lang="scss">
</style>

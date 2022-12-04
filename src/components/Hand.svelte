<script lang="ts">
	// Types

	// Imports
	import dateToRadians from "../lib/dateToRadians";
	import {format} from "date-fns";

	// Props
	export let time: Date;
	export let radius: number;


	$: angle = dateToRadians(time) + Math.PI;
</script>

<g
	class="hand"
	style={`transform: rotate(${angle}rad);`}>

	<line
		stroke="black"
		stroke-width="75"
		x1="0"
		x2="0"
		y1="0"
		y2="-500">
	</line>

	<circle
		r="300">
	</circle>

	<circle
		fill="white"
		r="250">
	</circle>

	<path
		d="M 0 -{radius + 125} L 50 -{radius + 75} L 0 -{ radius + 25} L -50 -{radius + 75} Z">
	</path>

	<path
		d="M 0 -650 L 100 -400 L 0 -500 L -100 -400 Z">
	</path>

	<path
		d="M 0 -1480 L 50 -1575 L 0 -1550 L -50 -1575 Z">
	</path>

</g>

<text
	class="hand__time"
	text-anchor="middle"
	alignment-baseline="middle">
	{format(time, "HH:mm:ss")}
</text>

<style lang="scss">
	.hand {
		&__time{
			font-size: 2em;
			font-family: 'Pinyon Script', cursive;

			transform: translateY(0.1em);
		}
	}
</style>

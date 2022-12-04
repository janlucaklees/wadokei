<script lang="ts">
	// Types

	// Imports
	import generateCircleSectionPath from "../../lib/generateCircleSectionPath.js";

	// Components
	import {v4 as uuid4} from "uuid";

	// Props
	export let angle: number;
	export let radius: number;


	const id = `solar-time-${uuid4()}`
</script>

<g
	class="solar-time">

	<defs>
		<path
			{id}
			fill="transparent"
			d={`M ${generateCircleSectionPath(angle, radius * 0.96)}`}>
		</path>
	</defs>

	<text>
		<textPath
			startOffset="50%"
			text-anchor="middle"
			alignment-baseline="middle"
			xlink:href={`#${id}`}>
			<slot></slot>
		</textPath>
	</text>

	<path
		{id}
		stroke="black"
		stroke-width="12"
		fill="transparent"
		d={`M ${generateCircleSectionPath(angle, radius * 0.92)}`}>
	</path>

</g>

<style lang="scss">
	.solar-time {
		font-size: 1.2em;
		font-family: 'Pinyon Script', cursive;
	}
</style>

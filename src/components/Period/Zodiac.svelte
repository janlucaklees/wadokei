<script lang="ts">
	// Types

	// Imports
	import generateCircleSectionPath from "../../lib/generateCircleSectionPath.js";

	// Components
	import {v4 as uuid4} from "uuid";

	// Props
	export let angle: number;
	export let radius: number;

	export let symbol: string;
	export let sign: string;

	$: signRadius = radius * 0.745;

	const symbolPathId = `zodiac-symbol-${uuid4()}`
	const signPathId = `zodiac-sign-${uuid4()}`
</script>

<g
	class="zodiac">

	<defs>

		<path
			id={symbolPathId}
			fill="transparent"
			d={`M ${generateCircleSectionPath(angle, radius * 0.82)}`}>
		</path>

		<path
			id={signPathId}
			fill="transparent"
			d={`M ${generateCircleSectionPath(angle, signRadius)}`}>
		</path>

	</defs>

	<text class="zodiac__symbol">
		<textPath
			startOffset="50%"
			text-anchor="middle"
			alignment-baseline="middle"
			xlink:href={`#${symbolPathId}`}>
			{symbol}
		</textPath>
	</text>

	<path
		stroke="black"
		stroke-width="8"
		fill="transparent"
		d={`M ${generateCircleSectionPath(angle, signRadius)}`}>
	</path>

	<path
		stroke="black"
		stroke-width="64"
		stroke-linecap="round"
		fill="transparent"
		d={`M ${generateCircleSectionPath(0.2, signRadius)}`}>
	</path>

	<path
		stroke="white"
		stroke-width="48"
		stroke-linecap="round"
		fill="transparent"
		d={`M ${generateCircleSectionPath(0.2, signRadius)}`}>
	</path>

	<text class="zodiac__sign">
		<textPath
			startOffset="50%"
			text-anchor="middle"
			alignment-baseline="middle"
			xlink:href={`#${signPathId}`}>
			{sign}
		</textPath>
	</text>

</g>

<style lang="scss">
	.zodiac {

		&__symbol {
			font-size: 3em;
			font-family: 'Zen Antique Soft', serif;
		}

		&__sign {
			font-size: 1em;
			font-family: 'Pinyon Script', cursive;
			text-shadow: 0 0 1px white;

			transform: translateY(0.175em);
		}
	}
</style>

<script lang="ts">
	// Types

	// Imports
	import generateCircleSectionPath from "../../lib/generateCircleSectionPath.js";

	// Components
	import {v4 as uuid4} from "uuid";

	// Props
	export let angle: number;
	export let radius: number;

	export let numeral: string;
	export let strikes: string;


	$: strikesRadius = radius * 0.59;

	const numeralPathId = `zodiac-symbol-${uuid4()}`
	const strikesPathId = `zodiac-sign-${uuid4()}`
</script>

<g
	class="numeral">

	<defs>

		<path
			id={numeralPathId}
			fill="transparent"
			d={`M ${generateCircleSectionPath(angle, radius * 0.65)}`}>
		</path>

		<path
			id={strikesPathId}
			fill="transparent"
			d={`M ${generateCircleSectionPath(angle, strikesRadius)}`}>
		</path>

	</defs>

	<text class="numeral__symbol">
		<textPath
			startOffset="50%"
			text-anchor="middle"
			alignment-baseline="middle"
			xlink:href={`#${numeralPathId}`}>
			{numeral}
		</textPath>
	</text>

	<path
		stroke="black"
		stroke-width="12"
		fill="transparent"
		d={`M ${generateCircleSectionPath(angle, strikesRadius)}`}>
	</path>

	<path
		stroke="black"
		stroke-width="62"
		stroke-linecap="round"
		fill="transparent"
		d={`M ${generateCircleSectionPath(0, strikesRadius)}`}>
	</path>

	<path
		stroke="white"
		stroke-width="52"
		stroke-linecap="round"
		fill="transparent"
		d={`M ${generateCircleSectionPath(0, strikesRadius)}`}>
	</path>

	<text class="numeral__strikes">
		<textPath
			startOffset="50%"
			text-anchor="middle"
			alignment-baseline="middle"
			xlink:href={`#${strikesPathId}`}>
			{strikes}
		</textPath>
	</text>

</g>

<style lang="scss">
	.numeral {

		&__symbol {
			font-size: 2em;
			font-family: 'Zen Antique Soft', serif;
		}

		&__strikes {
			font-size: .75em;
			font-family: 'Pinyon Script', cursive;
			text-shadow: 0 0 1px white;

			transform: translate(-0.1em, 0.175em);
		}
	}
</style>

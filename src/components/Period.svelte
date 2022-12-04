<script lang="ts">
	// Types
	import type TimedPeriod from "../types/TypeTimedPeriod";

	// Imports
	import slugify from "slugify";
	import {v4 as uuid4} from "uuid";

	import secondsToRadians from "../lib/secondsToRadians";
	import generateCircleSectionPath from "../lib/generateCircleSectionPath.js";

	// Components
	import SolarTime from "./Period/SolarTime.svelte";
	import Zodiac from "./Period/Zodiac.svelte";
	import Numeral from "./Period/Numeral.svelte";
	import Ticks from "./Period/Ticks.svelte";

	// Props
	export let timedPeriod: TimedPeriod;
	export let radius: number;


	let id = uuid4();

	$: period = timedPeriod.period;
	$: angle = secondsToRadians(timedPeriod.duration);
	$: startAngle = secondsToRadians(timedPeriod.start) + (angle / 2) + Math.PI;

</script>

<g
	class={`period period--${slugify(period.solarTime)}`}
	style={`transform: rotate(${startAngle}rad);`}>

	<Ticks {angle} radius1={radius} radius2={radius + 50} amount={10} />

	<path
		class="period__background"
		stroke-width="8"
		d={`M ${generateCircleSectionPath(angle, radius)} L ${generateCircleSectionPath(angle, radius * 0.59, true)} Z`}>
	</path>

	<SolarTime {angle} {radius} >
		{period.solarTime}
	</SolarTime>

	<Zodiac {angle} {radius} symbol={period.zodiacSymbol} sign={period.zodiacSign} />

	<Numeral {angle} {radius} numeral={period.japaneseNumeral} strikes={period.strikes} />

</g>

<style lang="scss">
	.period {
		$root: &;

		&__solar-time {
			font-size: 60px;
		}

		&__background {
			fill: #C9F6FF;
			stroke: black;
		}

		&--sunrise #{$root}__background {
			fill: #FAFBBD;
		}

		&--sunset #{$root}__background {
			fill: #FFADBC;
		}

		&--evening #{$root}__background,
		&--midnight #{$root}__background,
		&--before-dawn #{$root}__background {
			fill: #546bab;
		}
	}
</style>

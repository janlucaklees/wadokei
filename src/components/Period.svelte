<script lang="ts">
	// Types
	import type TimedPeriod from "../types/TypeTimedPeriod";

	// Imports
	import slugify from "slugify";

	import secondsToRadians from "../lib/secondsToRadians";
	import generateCircleSectionPath from "../lib/generateCircleSectionPath.js";

	// Props
	export let timedPeriod: TimedPeriod;
	export let radius: number;


	$: period = timedPeriod.period;
	$: angle = secondsToRadians(timedPeriod.duration);
	$: startAngle = secondsToRadians(timedPeriod.start) + (angle / 2) + Math.PI;

</script>

<g
	class={`period period--${slugify(period.solarTime)}`}
	style={`transform: rotate(${startAngle}rad);`}>

	<path
		class="period__background"
		d={`M 0 0 L ${generateCircleSectionPath(angle, radius)} Z`}>
	</path>

	<text
		y="-340"
		text-anchor="middle"
		alignment-baseline="hanging">
		{period.solarTime}
	</text>

	<text
		y="-310"
		text-anchor="middle"
		alignment-baseline="hanging">
		{period.zodiacSymbol}
	</text>

	<text
		y="-295"
		text-anchor="middle"
		alignment-baseline="hanging">
		{period.zodiacSign}
	</text>

	<text
		y="-265"
		text-anchor="middle"
		alignment-baseline="hanging">
		{period.japaneseNumeral}
	</text>

	<text
		y="-250"
		text-anchor="middle"
		alignment-baseline="hanging">
		{period.strikes}
	</text>

</g>

<style lang="scss">
	.period {
		$root: &;

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

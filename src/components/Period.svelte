<script lang="ts">
	// Types
	import type TimedPeriod from "../types/TypeTimedPeriod";

	// Imports
	import slugify from "slugify";

	import secondsToDegrees from "../lib/secondsToDegrees";

	// Props
	export let timedPeriod: TimedPeriod;


	$: period = timedPeriod.period;
	$: halfDurationAngle = secondsToDegrees(timedPeriod.duration) / 2;
	$: startAngle = secondsToDegrees(timedPeriod.start) + halfDurationAngle + 180;

	let r = 350;
	$: x = Math.sin(halfDurationAngle * (Math.PI / 180)) * r;
	$: y = r / (1 / Math.cos(halfDurationAngle * (Math.PI / 180)));



	$: console.log(x);
	$: console.log(y);
</script>

<g
	class={`period period--${slugify(period.solarTime)}`}
	style={`transform: rotate(${startAngle}deg);`}>

	<path
		class="period__background"
		d={`M 0 0 L ${x} -${y} A 350 350 0 0 0 -${x} -${y} Z`}>
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

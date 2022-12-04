<script lang="ts">
	// Types
	import type Period from "../types/TypePeriod";

	// Components
	import SvgPeriod from "./Period.svelte";
	import SvgHour from "./Hour.svelte";
	import SvgHand from "./Hand.svelte";

	// Imports
	import {addDays, set} from "date-fns";
	import SunCalc from "suncalc";

	import getTimedPeriods from "../lib/getTimedPeriods.js";

	// Props
	export let time: Date;
	export let latitude: Number;
	export let longitude: Number;

	export const radius: Number = 1200;


	const nightPeriods: Array<Period> = [
		{
			zodiacSign: "Rooster",
			zodiacSymbol: "酉",
			japaneseNumeral: "六",
			strikes: "6",
			solarTime: "sunset",
		} as Period,
		{
			zodiacSign: "Dog",
			zodiacSymbol: "戌",
			japaneseNumeral: "五",
			strikes: "5",
			solarTime: "evening",
		} as Period,
		{
			zodiacSign: "Pig",
			zodiacSymbol: "亥",
			japaneseNumeral: "四",
			strikes: "4",
			solarTime: "evening",
		} as Period,
		{
			zodiacSign: "Rat",
			zodiacSymbol: "子",
			japaneseNumeral: "九",
			strikes: "9",
			solarTime: "midnight",
		} as Period,
		{
			zodiacSign: "Ox",
			zodiacSymbol: "丑",
			japaneseNumeral: "八",
			strikes: "8",
			solarTime: "before dawn",
		} as Period,
		{
			zodiacSign: "Tiger",
			zodiacSymbol: "寅",
			japaneseNumeral: "七",
			strikes: "7",
			solarTime: "before dawn",
		},
	];
	const dayPeriods: Array<Period> = [
		{
			zodiacSign: "Rabbit",
			zodiacSymbol: "卯",
			japaneseNumeral: "六",
			strikes: "6",
			solarTime: "sunrise",
		} as Period,
		{
			zodiacSign: "Dragon",
			zodiacSymbol: "辰",
			japaneseNumeral: "五",
			strikes: "5",
			solarTime: "morning",
		} as Period,
		{
			zodiacSign: "Snake",
			zodiacSymbol: "巳",
			japaneseNumeral: "四",
			strikes: "4",
			solarTime: "morning",
		} as Period,
		{
			zodiacSign: "Horse",
			zodiacSymbol: "午",
			japaneseNumeral: "九",
			strikes: "9",
			solarTime: "noon",
		} as Period,
		{
			zodiacSign: "Goat",
			zodiacSymbol: "未",
			japaneseNumeral: "八",
			strikes: "8",
			solarTime: "afternoon",
		} as Period,
		{
			zodiacSign: "Monkey",
			zodiacSymbol: "申",
			japaneseNumeral: "七",
			strikes: "7",
			solarTime: "afternoon",
		} as Period,
	];


	$: sunEvents = SunCalc.getTimes(time, latitude, longitude);
	$: sunrise = sunEvents.sunrise;
	$: sunset  = sunEvents.sunset;
	// $: sunrise = set( new Date(), { hours: 6, minutes: 0, seconds: 0, milliseconds: 0 });
	// $: sunset  = set( new Date(), { hours: 18, minutes: 0, seconds: 0, milliseconds: 0 });

</script>

<svg
	style="--radius: {radius}"
	class="wadokei"
	width="800"
	height="800"
	viewBox="-1510 -1510 3020 3020">

	{#each getTimedPeriods(dayPeriods, sunrise, sunset) as period}
		<SvgPeriod timedPeriod={period} {radius} />
	{/each}

	{#each getTimedPeriods(nightPeriods, sunset, addDays(sunrise, 1)) as period}
		<SvgPeriod timedPeriod={period} {radius} />
	{/each}

	{#each Array(24) as _, hour}
		<SvgHour {hour} {radius} />
	{/each}

	<SvgHand {time} {radius} />

</svg>

<style lang="scss">
	.wadokei {
		width: 100%;
		height: 100%;
		font-size: calc(var(--radius) * 0.04 * 1px);
	}
</style>

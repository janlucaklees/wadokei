<script lang="ts">
	// Types
	import type Period from "../types/TypePeriod";

	// Components
	import SvgPeriod from "./Period.svelte";
	import SvgHand from "./Hand.svelte";

	// Imports
	import { addDays } from "date-fns";
	import SunCalc from "suncalc";

	import getTimedPeriods from "../lib/getTimedPeriods.js";

	// Props
	export let time: Date;
	export let latitude: Number;
	export let longitude: Number;
	export let radius: Number = 400;


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

</script>

<svg width="800" height="800" viewBox="-400 -400 800 800">

	{#each getTimedPeriods(dayPeriods, sunrise, sunset) as period}
		<SvgPeriod timedPeriod={period} {radius} />
	{/each}

	{#each getTimedPeriods(nightPeriods, sunset, addDays(sunrise, 1)) as period}
		<SvgPeriod timedPeriod={period} {radius} />
	{/each}

	<SvgHand {time} {radius} />

</svg>

<style lang="scss">
</style>

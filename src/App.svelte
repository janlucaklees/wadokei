<script lang="ts">
	import { onMount } from 'svelte';

	import {getNextSunrise, getNextSunset} from './lib/sun-functions';
	import {format} from 'date-fns';


	let sections = [
		{
			zodiacSign: "Rat",
			zodiacSymbol: "子",
			japaneseNumeral: "九",
			strikes: "9",
			solarTime: "midnight",
		},
		{
			zodiacSign: "Ox",
			zodiacSymbol: "丑",
			japaneseNumeral: "八",
			strikes: "8",
			solarTime: "before dawn",
		},
		{
			zodiacSign: "Tiger",
			zodiacSymbol: "寅",
			japaneseNumeral: "七",
			strikes: "7",
			solarTime: "before dawn",
		},
		{
			zodiacSign: "Rabbit",
			zodiacSymbol: "卯",
			japaneseNumeral: "六",
			strikes: "6",
			solarTime: "sunrise",
		},
		{
			zodiacSign: "Dragon",
			zodiacSymbol: "辰",
			japaneseNumeral: "五",
			strikes: "5",
			solarTime: "morning",
		},
		{
			zodiacSign: "Snake",
			zodiacSymbol: "巳",
			japaneseNumeral: "四",
			strikes: "4",
			solarTime: "morning",
		},
		{
			zodiacSign: "Horse",
			zodiacSymbol: "午",
			japaneseNumeral: "九",
			strikes: "9",
			solarTime: "noon",
		},
		{
			zodiacSign: "Goat",
			zodiacSymbol: "未",
			japaneseNumeral: "八",
			strikes: "8",
			solarTime: "afternoon",
		},
		{
			zodiacSign: "Monkey",
			zodiacSymbol: "申",
			japaneseNumeral: "七",
			strikes: "7",
			solarTime: "afternoon",
		},
		{
			zodiacSign: "Rooster",
			zodiacSymbol: "酉",
			japaneseNumeral: "六",
			strikes: "6",
			solarTime: "sunset",
		},
		{
			zodiacSign: "Dog",
			zodiacSymbol: "戌",
			japaneseNumeral: "五",
			strikes: "5",
			solarTime: "evening",
		},
		{
			zodiacSign: "Pig",
			zodiacSymbol: "亥",
			japaneseNumeral: "四",
			strikes: "4",
			solarTime: "evening",
		},
	];

	let ticks = Array(sections.length * 10);


	let time = new Date();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	$: timeString = format(time, 'H:mm:ss');

	$: nextSunrise = getNextSunrise(
		time,
		51.93410472914457,
		8.868428487177423
	);

	$: nextSunset = getNextSunset(
		time,
		51.93410472914457,
		8.868428487177423
	);

</script>

<main>
	{timeString}
	{nextSunrise}
	{nextSunset}
	<div class="clock">
		<div class="clock__sections">
			{#each sections as section, index}
				<div
					class="clock__sections__section"
					style={`transform: rotateZ(${(360 / sections.length) * index}deg);`}
				>
					<div class="clock__sections__section__upper">
						{section.zodiacSymbol}
					</div>

					<div class="clock__sections__section__lower">
						{section.japaneseNumeral}
					</div>
				</div>
			{/each}

			<div class="clock__sections__divider" />
		</div>

		<div class="clock__ticks">
			{#each ticks as _, index}
				<div
					class="clock__ticks__tick"
					style={`transform: translateX(-50%) rotateZ(${
						(360 / ticks.length) * index
					}deg);`}
				/>
			{/each}
		</div>

		<div class="clock__inner-circle" />
	</div>
</main>

<style lang="scss">
	@use "sass:math";

	.clock {
		$radius: 11rem;
		$diameter: $radius * 2;
		$rem: math.div($radius, 11);
		$px: math.div($rem, 16);

		position: relative;

		width: $radius * 2;
		height: $radius * 2;

		border: 2 * $px solid black;
		border-radius: 50%;

		&__sections {
			position: absolute;
			top: 0;
			left: 0;

			width: inherit;
			height: inherit;

			&__section {
				position: absolute;
				top: 0;
				left: 0;

				width: inherit;
				height: inherit;

				font-size: $radius * 0.1;
				text-align: center;

				transform-origin: center center;

				&::before {
					content: "";

					position: absolute;
					top: -1 * $px;
					left: 50%;
					bottom: -1 * $px;

					width: 2 * $px;

					background-color: #000;

					transform: translateX(-50%) rotateZ(15deg);
					transform-origin: center center;
				}

				&__upper {
					padding-top: 0.3 * $rem;
				}

				&__lower {
					padding-top: 0.2 * $rem;
				}
			}

			&__divider {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				width: $diameter * 0.83;
				height: $diameter * 0.83;

				border: 1 * $px solid black;
				border-radius: 50%;
			}
		}

		&__ticks {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			width: $diameter * 0.65;
			height: $diameter * 0.65;

			border: 2 * $px solid black;
			border-radius: 50%;

			background-color: #fff;

			&__tick {
				position: absolute;
				top: -1 * $px;
				left: 50%;
				bottom: -1 * $px;

				width: 1 * $px;

				background-color: #000;

				transform-origin: center center;
			}
		}

		&__inner-circle {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			width: $diameter * 0.6;
			height: $diameter * 0.6;

			border: 2 * $px solid black;
			border-radius: 50%;

			background-color: #fff;
		}
	}
</style>

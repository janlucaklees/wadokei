import type Period from "../types/TypePeriod";
import type TimedPeriod from "../types/TypeTimedPeriod";
import {differenceInSeconds, set} from "date-fns";
import getStartOfDay from "./getStartOfDay";


export default function getTimedPeriods(periods: Array<Period>, start: Date, end: Date): Array<TimedPeriod> {

	// Calculate how long one period is in seconds.
	const durationInSeconds = differenceInSeconds(end, start) / 6;

	// Calculate the start angle.
	const midnight = getStartOfDay(start);
	const startInSeconds = differenceInSeconds(start, midnight);

	// Create and return the array with start angles and durations for each period.
	return periods.map((period, index) => ({
			start: startInSeconds + durationInSeconds * index,
			duration: durationInSeconds,
			period: period,
		} as TimedPeriod)
	);
}

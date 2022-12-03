import SunCalc from 'suncalc';
import { isBefore, isAfter, addDays } from 'date-fns';


export function getSunrise(date: Date, latitude: Number, longitude: Number): Date {
	let sunEvents = SunCalc.getTimes(date, latitude, longitude);

	// If we are already past sunset, then take the sunrise from the next day.
	if (isAfter(date, sunEvents.sunset)) {
		sunEvents = SunCalc.getTimes(addDays(date, 1), latitude, longitude);
	}

	return sunEvents.sunrise
}


export function getSunset(date: Date, latitude: Number, longitude: Number): Date {
	let sunEvents = SunCalc.getTimes(date, latitude, longitude);

	// If we are still before the sunrise, then take the sunset from the previous day.
	if (isBefore(date, sunEvents.sunrise)) {
		sunEvents = SunCalc.getTimes(addDays(date, -1), latitude, longitude);
	}

	return sunEvents.sunset
}

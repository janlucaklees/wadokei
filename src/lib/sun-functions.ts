import SunCalc from 'suncalc';
import { isAfter, addDays } from 'date-fns';


const KEY_SUNRISE = 'sunrise';
const KEY_SUNSET = 'sunset';

export function getNextSunrise(date: Date, latitude: Number, longitude: Number) {
	return getNextSunEvent(date, latitude, longitude, KEY_SUNRISE);
}


export function getNextSunset(date: Date, latitude: Number, longitude: Number) {
	return getNextSunEvent(date, latitude, longitude, KEY_SUNSET);
}

function getNextSunEvent(date: Date, latitude: Number, longitude: Number, event: string) {
	console.assert([KEY_SUNSET, KEY_SUNRISE].includes(event));

	let eventDate = SunCalc.getTimes(date, latitude, longitude)[event];

	if (isAfter(date, eventDate)) {
		eventDate = SunCalc.getTimes(addDays(date, 1), latitude, longitude)[event];
	}

	return eventDate;
}

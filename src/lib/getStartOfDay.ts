import {set} from "date-fns";


export default function getStartOfDay(date: Date): Date {
	return set(
		date,
		{
			hours: 0,
			minutes: 0,
			seconds: 0,
			milliseconds: 0
		}
	);
}

import {differenceInSeconds} from "date-fns";

import secondsToRadians from "./secondsToRadians";
import getStartOfDay from "./getStartOfDay";


export default function dateToRadians(date: Date): number {
	return secondsToRadians(
		differenceInSeconds(
			date,
			getStartOfDay(date)
		)
	);
}

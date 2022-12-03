import {differenceInSeconds} from "date-fns";

import secondsToDegrees from "./secondsToDegrees";
import getStartOfDay from "./getStartOfDay";


export default function dateToDegrees(date: Date): number {
	return secondsToDegrees(
		differenceInSeconds(
			date,
			getStartOfDay(date)
		)
	);
}

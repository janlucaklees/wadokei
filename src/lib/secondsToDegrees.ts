const SECONDS_PER_DAY = 24 * 60 * 60;

export default function secondsToDegrees(seconds: number): number {
	return (seconds * 360 / SECONDS_PER_DAY) % 360;
}

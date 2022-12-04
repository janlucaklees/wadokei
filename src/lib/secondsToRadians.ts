const SECONDS_PER_DAY = 24 * 60 * 60;

const fullCircleRadians = 2 * Math.PI;

export default function secondsToRadians(seconds: number): number {
	return (seconds * fullCircleRadians / SECONDS_PER_DAY) % fullCircleRadians;
}

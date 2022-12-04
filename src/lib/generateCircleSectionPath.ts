export default function generateCircleSectionPath(angle: number, radius: number): string {
	const halfAngle = angle / 2;
	const x = Math.sin(halfAngle) * radius;
	const y = Math.cos(halfAngle) * radius;

	return `${x} -${y} A ${radius} ${radius} 0 0 0 -${x} -${y}`
}

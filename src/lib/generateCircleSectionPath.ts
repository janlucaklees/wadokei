export default function generateCircleSectionPath(angle: number, radius: number, reversed: boolean = false): string {
	const halfAngle = angle / 2;
	const x = Math.sin(halfAngle) * radius;
	const y = Math.cos(halfAngle) * radius;

	if (reversed) {
		return `${x} ${-y} A ${radius} ${radius} 0 0 0 ${-x} ${-y}`
	}

	return `${-x} ${-y} A ${radius} ${radius} 0 0 1 ${x} ${-y}`
}

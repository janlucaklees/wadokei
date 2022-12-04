export default function generateRadiusSegment(angle: number, radius1: number, radius2: number): string {
	const x1 = Math.sin(angle) * radius1;
	const y1 = Math.cos(angle) * radius1;
	const x2 = Math.sin(angle) * radius2;
	const y2 = Math.cos(angle) * radius2;

	return `${x1} ${-y1} L ${x2} ${-y2}`
}

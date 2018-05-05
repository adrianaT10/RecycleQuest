export class Levels {
	levelLimits = [200, 500, 1000, 1500, 3000, 4000, 5500];
	levelLabels = ["Novice", "Salvator in devenire", "Dedicat", " Constiincios", "Salvator Adevarat", "Green Alien", "Recycling Buddha"]

	getLevel(score: number) {
		let index = this.levelLimits.findIndex((x) => x >= score);
		return [this.levelLabels[index], this.levelLimits[index]];
	}

	
}
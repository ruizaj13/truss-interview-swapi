export interface FormattedPlanetData {
	name: string,
	climate: string,
	numOfResidents: number | string,
	terrains: string,
	population: string,
	waterSurfaceArea: number | string,
	url: string
};

const sortByName = (a: { name: string; }, b: { name: string; }) => {
	if (a.name < b.name) {
		return -1;
	};

	if (a.name > b.name) {
		return 1;
	};

	return 0;
};

const formatNumber = (num: string | number): string => {
	return Number(num).toLocaleString().replaceAll(',', ' ');
};

const calculateSurfaceArea = (diameter: any, percentageOfWater: any) => {
	const surfaceArea = 4 * Math.PI * Math.pow(diameter / 2, 2);

	const total = Math.round(surfaceArea * percentageOfWater / 100);

	return formatNumber(total);
};


export const formatPlanets = (planets: Record<string, string>[]): FormattedPlanetData[] => {
	const formattedPlanets: FormattedPlanetData[] = [];

	planets.forEach((item: Record<string, string>) => {
		formattedPlanets.push({
			name: item.name === 'unknown' ? '?' : item.name,
			climate: item.climate === 'unknown' ? '?' : item.climate,
			numOfResidents: item.residents === 'unknown' ? '?' : item.residents.length,
			terrains: item.terrain === 'unknown' ? '?' : item.terrain,
			population: item.population === 'unknown' ? '?' : formatNumber(item.population),
			waterSurfaceArea: item.surface_water === 'unknown' || item.diameter === 'unknown' ? '?' : calculateSurfaceArea(item.diameter, item.surface_water),
			url: item.url
		});
	});

	return formattedPlanets.sort(sortByName);
};

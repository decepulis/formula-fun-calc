import type { Race } from './types';

export enum Drivers {
	Hamilton = 'Hamilton',
	Russell = 'Russell',
	Verstappen = 'Verstappen',
	Perez = 'Perez',
	Leclerc = 'Leclerc',
	Sainz = 'Sainz',
	Piastri = 'Piastri',
	Norris = 'Norris',
	Stroll = 'Stroll',
	Alonso = 'Alonso',
	Gasly = 'Gasly',
	Ocon = 'Ocon',
	DeVries = 'Ricciardo',
	Tsunoda = 'Tsunoda',
	Bottas = 'Bottas',
	Zhou = 'Zhou',
	Albon = 'Albon',
	Sargeant = 'Sargeant',
	Hulkenberg = 'Hulkenberg',
	Magnussen = 'Magnussen'
}

export enum Teams {
	Mercedes = 'Mercedes',
	RedBull = 'Red Bull',
	Ferrari = 'Ferrari',
	McLaren = 'McLaren',
	Alpine = 'Alpine',
	AstonMartin = 'Aston Martin',
	AlphaTauri = 'AlphaTauri',
	AlfaRomeo = 'AlfaRomeo',
	Williams = 'Williams',
	Haas = 'Haas'
}

export const teamColors: Record<Teams, string> = {
	[Teams.Mercedes]: '#009e8e',
	[Teams.RedBull]: '#0600ef',
	[Teams.Ferrari]: '#dc0000',
	[Teams.McLaren]: '#ff8700',
	[Teams.Alpine]: '#0090ff',
	[Teams.AstonMartin]: '#006f62',
	[Teams.AlphaTauri]: '#2b4562',
	[Teams.AlfaRomeo]: '#900000',
	[Teams.Williams]: '#005aff',
	[Teams.Haas]: '#666666'
};

export type Keys = Drivers | Teams;

export const driverTeams: Record<Drivers, Teams> = {
	[Drivers.Hamilton]: Teams.Mercedes,
	[Drivers.Russell]: Teams.Mercedes,
	[Drivers.Verstappen]: Teams.RedBull,
	[Drivers.Perez]: Teams.RedBull,
	[Drivers.Leclerc]: Teams.Ferrari,
	[Drivers.Sainz]: Teams.Ferrari,
	[Drivers.Piastri]: Teams.McLaren,
	[Drivers.Norris]: Teams.McLaren,
	[Drivers.Stroll]: Teams.AstonMartin,
	[Drivers.Alonso]: Teams.AstonMartin,
	[Drivers.Gasly]: Teams.Alpine,
	[Drivers.Ocon]: Teams.Alpine,
	[Drivers.DeVries]: Teams.AlphaTauri,
	[Drivers.Tsunoda]: Teams.AlphaTauri,
	[Drivers.Bottas]: Teams.AlfaRomeo,
	[Drivers.Zhou]: Teams.AlfaRomeo,
	[Drivers.Albon]: Teams.Williams,
	[Drivers.Sargeant]: Teams.Williams,
	[Drivers.Hulkenberg]: Teams.Haas,
	[Drivers.Magnussen]: Teams.Haas
};

export const teamDrivers = Object.entries(driverTeams).reduce((acc, [driver, team]) => {
	if (!acc[team]) {
		acc[team] = [];
	}
	acc[team].push(driver);
	return acc;
}, {}) as Record<Teams, Drivers[]>;

export const races: Race[] = [
	{
		name: 'Bahrain',
		odds: {
			[Drivers.Hamilton]: { o1: 1600, o3: 275, o6: -300, o10: -350 },
			[Drivers.Russell]: { o1: 2000, o3: 400, o6: -190, o10: -300 },
			[Drivers.Verstappen]: { o1: -145, o3: -350, o6: -600, o10: -800 },
			[Drivers.Perez]: { o1: 600, o3: -120, o6: -500, o10: -600 },
			[Drivers.Leclerc]: { o1: 800, o3: -110, o6: -400, o10: -500 },
			[Drivers.Sainz]: { o1: 1600, o3: 185, o6: -300, o10: -400 },
			[Drivers.Piastri]: { o1: 50000, o3: 6600, o6: 800, o10: 160 },
			[Drivers.Norris]: { o1: 25000, o3: 4000, o6: 350, o10: 100 },
			[Drivers.Stroll]: { o1: 15000, o3: 3300, o6: 275, o10: -150 },
			[Drivers.Alonso]: { o1: 500, o3: -165, o6: -500, o10: -600 },
			[Drivers.Gasly]: { o1: 25000, o3: 5000, o6: 700, o10: 125 },
			[Drivers.Ocon]: { o1: 25000, o3: 5000, o6: 550, o10: 120 },
			[Drivers.DeVries]: { o1: 200000, o3: 15000, o6: 3300, o10: 225 },
			[Drivers.Tsunoda]: { o1: 150000, o3: 15000, o6: 3300, o10: 250 },
			[Drivers.Bottas]: { o1: 25000, o3: 3300, o6: 400, o10: -120 },
			[Drivers.Zhou]: { o1: 25000, o3: 3300, o6: 500, o10: -120 },
			[Drivers.Albon]: { o1: 200000, o3: 15000, o6: 4000, o10: 300 },
			[Drivers.Sargeant]: { o1: 200000, o3: 20000, o6: 5000, o10: 500 },
			[Drivers.Hulkenberg]: { o1: 25000, o3: 6600, o6: 900, o10: 160 },
			[Drivers.Magnussen]: { o1: 25000, o3: 6600, o6: 900, o10: 160 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Perez,
			Drivers.Alonso,
			Drivers.Sainz,
			Drivers.Hamilton,
			Drivers.Stroll,
			Drivers.Russell,
			Drivers.Bottas,
			Drivers.Gasly,
			Drivers.Albon,
			Drivers.Tsunoda,
			Drivers.Sargeant,
			Drivers.Magnussen,
			Drivers.DeVries,
			Drivers.Hulkenberg,
			Drivers.Zhou,
			Drivers.Norris,
			Drivers.Ocon,
			Drivers.Leclerc,
			Drivers.Piastri
		]
	},
	{
		name: 'Saudi Arabia',
		odds: {
			[Drivers.Hamilton]: { o1: 4000, o3: 350, o6: -275, o10: -500 },
			[Drivers.Russell]: { o1: 4000, o3: 400, o6: -225, o10: -500 },
			[Drivers.Verstappen]: { o1: -350, o3: -500, o6: -600, o10: -800 },
			[Drivers.Perez]: { o1: 500, o3: -250, o6: -450, o10: -500 },
			[Drivers.Leclerc]: { o1: 2500, o3: 200, o6: -275, o10: -450 },
			[Drivers.Sainz]: { o1: 2000, o3: 225, o6: -400, o10: -500 },
			[Drivers.Piastri]: { o1: 200000, o3: 20000, o6: 2800, o10: 400 },
			[Drivers.Norris]: { o1: 100000, o3: 10000, o6: 1400, o10: 150 },
			[Drivers.Stroll]: { o1: 6600, o3: 500, o6: -250, o10: -400 },
			[Drivers.Alonso]: { o1: 900, o3: -150, o6: -400, o10: -500 },
			[Drivers.Gasly]: { o1: 25000, o3: 4000, o6: 500, o10: -175 },
			[Drivers.Ocon]: { o1: 25000, o3: 4000, o6: 500, o10: -175 },
			[Drivers.DeVries]: { o1: 200000, o3: 50000, o6: 4000, o10: 400 },
			[Drivers.Tsunoda]: { o1: 200000, o3: 50000, o6: 4000, o10: 250 },
			[Drivers.Bottas]: { o1: 150000, o3: 10000, o6: 1400, o10: 200 },
			[Drivers.Zhou]: { o1: 150000, o3: 10000, o6: 1400, o10: 225 },
			[Drivers.Albon]: { o1: 100000, o3: 6600, o6: 1100, o10: 120 },
			[Drivers.Sargeant]: { o1: 200000, o3: 25000, o6: 3300, o10: 400 },
			[Drivers.Hulkenberg]: { o1: 150000, o3: 10000, o6: 1400, o10: 175 },
			[Drivers.Magnussen]: { o1: 150000, o3: 10000, o6: 1400, o10: 175 }
		}
	},
	{
		name: 'Australia'
	},
	{
		name: 'Azerbaijan',
		odds: {
			[Drivers.Hamilton]: { o1: 1400, o3: 160, o6: -350, o10: -450 },
			[Drivers.Russell]: { o1: 3300, o3: 275, o6: -300, o10: -400 },
			[Drivers.Verstappen]: { o1: -275, o3: -450, o6: -600, o10: -700 },
			[Drivers.Perez]: { o1: 400, o3: -225, o6: -500, o10: -600 },
			[Drivers.Leclerc]: { o1: 2800, o3: 275, o6: -300, o10: -400 },
			[Drivers.Sainz]: { o1: 4000, o3: 400, o6: -175, o10: -350 },
			[Drivers.Piastri]: { o1: 100000, o3: 10000, o6: 2000, o10: 225 },
			[Drivers.Norris]: { o1: 30000, o3: 3300, o6: 600, o10: 120 },
			[Drivers.Stroll]: { o1: 10000, o3: 600, o6: -150, o10: -300 },
			[Drivers.Alonso]: { o1: 1000, o3: -165, o6: -400, o10: -500 },
			[Drivers.Gasly]: { o1: 25000, o3: 4000, o6: 400, o10: -200 },
			[Drivers.Ocon]: { o1: 30000, o3: 4000, o6: 400, o10: -200 },
			[Drivers.DeVries]: { o1: 200000, o3: 20000, o6: 3300, o10: 400 },
			[Drivers.Tsunoda]: { o1: 100000, o3: 20000, o6: 2500, o10: 300 },
			[Drivers.Bottas]: { o1: 150000, o3: 25000, o6: 3300, o10: 300 },
			[Drivers.Zhou]: { o1: 150000, o3: 25000, o6: 3300, o10: 400 },
			[Drivers.Albon]: { o1: 100000, o3: 6600, o6: 1000, o10: 125 },
			[Drivers.Sargeant]: { o1: 200000, o3: 15000, o6: 2500, o10: 325 },
			[Drivers.Hulkenberg]: { o1: 100000, o3: 10000, o6: 1000, o10: 135 },
			[Drivers.Magnussen]: { o1: 100000, o3: 10000, o6: 1000, o10: 135 }
		},
		results: [
			Drivers.Perez,
			Drivers.Verstappen,
			Drivers.Leclerc,
			Drivers.Alonso,
			Drivers.Sainz,
			Drivers.Hamilton,
			Drivers.Stroll,
			Drivers.Russell,
			Drivers.Norris,
			Drivers.Tsunoda,
			Drivers.Piastri,
			Drivers.Albon,
			Drivers.Magnussen,
			Drivers.Gasly,
			Drivers.Ocon,
			Drivers.Sargeant,
			Drivers.Hulkenberg,
			Drivers.Bottas,
			Drivers.Zhou,
			Drivers.DeVries
		]
	},
	{
		name: 'Miami',
		odds: {
			[Drivers.Hamilton]: { o1: 2500, o3: 275, o6: -350, o10: -500 },
			[Drivers.Russell]: { o1: 2500, o3: 275, o6: -300, o10: -400 },
			[Drivers.Verstappen]: { o1: -250, o3: -500, o6: -700, o10: -900 },
			[Drivers.Perez]: { o1: 400, o3: -300, o6: -500, o10: -700 },
			[Drivers.Leclerc]: { o1: 1400, o3: -165, o6: -400, o10: -600 },
			[Drivers.Sainz]: { o1: 1600, o3: 175, o6: -400, o10: -600 },
			[Drivers.Piastri]: { o1: 100000, o3: 50000, o6: 2800, o10: 175 },
			[Drivers.Norris]: { o1: 6600, o3: 2500, o6: 125, o10: -250 },
			[Drivers.Stroll]: { o1: 10000, o3: 3300, o6: 165, o10: -200 },
			[Drivers.Alonso]: { o1: 2000, o3: 250, o6: -400, o10: -600 },
			[Drivers.Gasly]: { o1: 25000, o3: 6600, o6: 600, o10: -140 },
			[Drivers.Ocon]: { o1: 25000, o3: 6600, o6: 600, o10: -140 },
			[Drivers.DeVries]: { o1: 250000, o3: 150000, o6: 6600, o10: 450 },
			[Drivers.Tsunoda]: { o1: 250000, o3: 150000, o6: 6600, o10: 275 },
			[Drivers.Bottas]: { o1: 200000, o3: 100000, o6: 5000, o10: 350 },
			[Drivers.Zhou]: { o1: 200000, o3: 100000, o6: 5000, o10: 300 },
			[Drivers.Albon]: { o1: 100000, o3: 50000, o6: 2800, o10: 135 },
			[Drivers.Sargeant]: { o1: 200000, o3: 100000, o6: 5000, o10: 350 },
			[Drivers.Hulkenberg]: { o1: 50000, o3: 15000, o6: 1600, o10: 225 },
			[Drivers.Magnussen]: { o1: 50000, o3: 15000, o6: 1600, o10: 250 }
		}
	},
	{
		name: 'Monaco',
		odds: {
			[Drivers.Hamilton]: { o1: 2000, o3: 300, o6: -275, o10: -400 },
			[Drivers.Russell]: { o1: 5000, o3: 800, o6: -200, o10: -300 },
			[Drivers.Verstappen]: { o1: 150, o3: -275, o6: -600, o10: -700 },
			[Drivers.Perez]: { o1: 700, o3: 110, o6: -400, o10: -550 },
			[Drivers.Leclerc]: { o1: 275, o3: -165, o6: -600, o10: -700 },
			[Drivers.Sainz]: { o1: 600, o3: -140, o6: -400, o10: -500 },
			[Drivers.Piastri]: { o1: 200000, o3: 50000, o6: 3300, o10: 350 },
			[Drivers.Norris]: { o1: 25000, o3: 6600, o6: 300, o10: -250 },
			[Drivers.Stroll]: { o1: 10000, o3: 1600, o6: 100, o10: -275 },
			[Drivers.Alonso]: { o1: 450, o3: -140, o6: -500, o10: -650 },
			[Drivers.Gasly]: { o1: 50000, o3: 6600, o6: 450, o10: -165 },
			[Drivers.Ocon]: { o1: 50000, o3: 6600, o6: 450, o10: -165 },
			[Drivers.DeVries]: { o1: 200000, o3: 100000, o6: 5000, o10: 700 },
			[Drivers.Tsunoda]: { o1: 100000, o3: 20000, o6: 2000, o10: 200 },
			[Drivers.Bottas]: { o1: 50000, o3: 6600, o6: 1200, o10: 110 },
			[Drivers.Zhou]: { o1: 200000, o3: 20000, o6: 3300, o10: 350 },
			[Drivers.Albon]: { o1: 200000, o3: 50000, o6: 5000, o10: 275 },
			[Drivers.Sargeant]: { o1: 250000, o3: 100000, o6: 5000, o10: 700 },
			[Drivers.Hulkenberg]: { o1: 100000, o3: 15000, o6: 2000, o10: 175 },
			[Drivers.Magnussen]: { o1: 100000, o3: 15000, o6: 2000, o10: 175 }
		}
	},
	{
		name: 'Barcelona',
		odds: {
			[Drivers.Verstappen]: { o1: -350, o3: -600, o6: -800, o10: -1000 },
			[Drivers.Perez]: { o1: 400, o3: -350, o6: -700, o10: -900 },
			[Drivers.Alonso]: { o1: 700, o3: -225, o6: -500, o10: -800 },
			[Drivers.Leclerc]: { o1: 5000, o3: 250, o6: -400, o10: -600 },
			[Drivers.Sainz]: { o1: 6600, o3: 500, o6: -225, o10: -500 },
			[Drivers.Ocon]: { o1: 6600, o3: 1000, o6: 150, o10: -400 },
			[Drivers.Russell]: { o1: 6600, o3: 400, o6: -225, o10: -500 },
			[Drivers.Hamilton]: { o1: 6600, o3: 400, o6: -225, o10: -500 },
			[Drivers.Gasly]: { o1: 10000, o3: 1000, o6: 150, o10: -400 },
			[Drivers.Stroll]: { o1: 25000, o3: 1200, o6: 200, o10: -300 },
			[Drivers.Hulkenberg]: { o1: 25000, o3: 5000, o6: 1000, o10: 110 },
			[Drivers.Norris]: { o1: 50000, o3: 6600, o6: 1200, o10: 110 },
			[Drivers.Tsunoda]: { o1: 50000, o3: 6600, o6: 1400, o10: 225 },
			[Drivers.Magnussen]: { o1: 100000, o3: 25000, o6: 1400, o10: 200 },
			[Drivers.DeVries]: { o1: 100000, o3: 25000, o6: 4000, o10: 400 },
			[Drivers.Zhou]: { o1: 200000, o3: 50000, o6: 6600, o10: 400 },
			[Drivers.Piastri]: { o1: 200000, o3: 50000, o6: 6600, o10: 450 },
			[Drivers.Bottas]: { o1: 200000, o3: 25000, o6: 4000, o10: 400 },
			[Drivers.Albon]: { o1: 250000, o3: 75000, o6: 10000, o10: 500 },
			[Drivers.Sargeant]: { o1: 300000, o3: 100000, o6: 20000, o10: 1200 }
		}
	},
	{
		name: 'Canada',
		odds: {
			[Drivers.Hamilton]: { o1: 800, o3: 110, o6: -350, o10: -600 },
			[Drivers.Russell]: { o1: 1600, o3: 200, o6: -275, o10: -500 },
			[Drivers.Verstappen]: { o1: -250, o3: -350, o6: -600, o10: -800 },
			[Drivers.Perez]: { o1: 800, o3: -150, o6: -400, o10: -600 },
			[Drivers.Leclerc]: { o1: 1200, o3: 200, o6: -275, o10: -500 },
			[Drivers.Sainz]: { o1: 1600, o3: 200, o6: -275, o10: -500 },
			[Drivers.Piastri]: { o1: 100000, o3: 10000, o6: 1600, o10: 250 },
			[Drivers.Norris]: { o1: 100000, o3: 10000, o6: 800, o10: 100 },
			[Drivers.Stroll]: { o1: 8000, o3: 1000, o6: 115, o10: -350 },
			[Drivers.Alonso]: { o1: 1400, o3: 160, o6: -275, o10: -500 },
			[Drivers.Gasly]: { o1: 25000, o3: 2000, o6: 250, o10: -275 },
			[Drivers.Ocon]: { o1: 25000, o3: 2000, o6: 250, o10: -275 },
			[Drivers.DeVries]: { o1: 200000, o3: 50000, o6: 5000, o10: 700 },
			[Drivers.Tsunoda]: { o1: 100000, o3: 10000, o6: 1600, o10: 250 },
			[Drivers.Bottas]: { o1: 50000, o3: 10000, o6: 800, o10: 100 },
			[Drivers.Zhou]: { o1: 100000, o3: 10000, o6: 2500, o10: 500 },
			[Drivers.Albon]: { o1: 100000, o3: 25000, o6: 2500, o10: 500 },
			[Drivers.Sargeant]: { o1: 300000, o3: 50000, o6: 5000, o10: 700 },
			[Drivers.Hulkenberg]: { o1: 100000, o3: 10000, o6: 1200, o10: 200 },
			[Drivers.Magnussen]: { o1: 100000, o3: 10000, o6: 1200, o10: 200 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Alonso,
			Drivers.Hamilton,
			Drivers.Leclerc,
			Drivers.Sainz,
			Drivers.Perez,
			Drivers.Albon,
			Drivers.Ocon,
			Drivers.Stroll,
			Drivers.Bottas,
			Drivers.Piastri,
			Drivers.Gasly,
			Drivers.Norris,
			Drivers.Tsunoda,
			Drivers.Hulkenberg,
			Drivers.Zhou,
			Drivers.Magnussen,
			Drivers.DeVries,
			Drivers.Russell,
			Drivers.Sargeant
		]
	},
	{
		name: 'Austria',
		odds: {
			[Drivers.Hamilton]: { o1: 1200, o3: -110, o6: -400, o10: -700 },
			[Drivers.Russell]: { o1: 2800, o3: 250, o6: -275, o10: -600 },
			[Drivers.Verstappen]: { o1: -350, o3: -500, o6: -700, o10: -900 },
			[Drivers.Perez]: { o1: 900, o3: -120, o6: -500, o10: -800 },
			[Drivers.Leclerc]: { o1: 1400, o3: 225, o6: -275, o10: -600 },
			[Drivers.Sainz]: { o1: 2200, o3: 400, o6: -200, o10: -500 },
			[Drivers.Piastri]: { o1: 50000, o3: 12500, o6: 1200, o10: 225 },
			[Drivers.Norris]: { o1: 50000, o3: 5000, o6: 600, o10: -140 },
			[Drivers.Stroll]: { o1: 30000, o3: 1600, o6: 175, o10: -400 },
			[Drivers.Alonso]: { o1: 900, o3: -140, o6: -500, o10: -800 },
			[Drivers.Gasly]: { o1: 40000, o3: 2500, o6: 275, o10: -350 },
			[Drivers.Ocon]: { o1: 40000, o3: 1600, o6: 200, o10: -350 },
			[Drivers.DeVries]: { o1: 50000, o3: 15000, o6: 6500, o10: 2500 },
			[Drivers.Tsunoda]: { o1: 50000, o3: 15000, o6: 1600, o10: 300 },
			[Drivers.Bottas]: { o1: 50000, o3: 15000, o6: 2500, o10: 300 },
			[Drivers.Zhou]: { o1: 50000, o3: 15000, o6: 2500, o10: 300 },
			[Drivers.Albon]: { o1: 50000, o3: 10000, o6: 1000, o10: 150 },
			[Drivers.Sargeant]: { o1: 50000, o3: 15000, o6: 10000, o10: 4000 },
			[Drivers.Hulkenberg]: { o1: 50000, o3: 15000, o6: 1600, o10: 300 },
			[Drivers.Magnussen]: { o1: 50000, o3: 15000, o6: 2500, o10: 300 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Leclerc,
			Drivers.Perez,
			Drivers.Norris,
			Drivers.Alonso,
			Drivers.Sainz,
			Drivers.Russell,
			Drivers.Hamilton,
			Drivers.Stroll,
			Drivers.Gasly,
			Drivers.Albon,
			Drivers.Zhou,
			Drivers.Sargeant,
			Drivers.Ocon,
			Drivers.Bottas,
			Drivers.Piastri,
			Drivers.DeVries,
			Drivers.Magnussen,
			Drivers.Tsunoda,
			Drivers.Hulkenberg
		]
	},
	{
		name: 'Britain',
		odds: {
			[Drivers.Hamilton]: { o1: 1200, o3: 110, o6: -500, o10: -700 },
			[Drivers.Russell]: { o1: 2500, o3: 500, o6: -250, o10: -600 },
			[Drivers.Verstappen]: { o1: -350, o3: -800, o6: -1000, o10: -1200 },
			[Drivers.Perez]: { o1: 1000, o3: -175, o6: -600, o10: -800 },
			[Drivers.Leclerc]: { o1: 2000, o3: 140, o6: -350, o10: -1000 },
			[Drivers.Sainz]: { o1: 1200, o3: 110, o6: -500, o10: -650 },
			[Drivers.Piastri]: { o1: 50000, o3: 6600, o6: 1200, o10: 125 },
			[Drivers.Norris]: { o1: 15000, o3: 4000, o6: 350, o10: -180 },
			[Drivers.Stroll]: { o1: 6600, o3: 1400, o6: 200, o10: -350 },
			[Drivers.Alonso]: { o1: 2500, o3: 325, o6: -350, o10: -600 },
			[Drivers.Gasly]: { o1: 50000, o3: 6600, o6: 700, o10: -350 },
			[Drivers.Ocon]: { o1: 15000, o3: 1600, o6: 200, o10: 200 },
			[Drivers.DeVries]: { o1: 250000, o3: 50000, o6: 20000, o10: 1400 },
			[Drivers.Tsunoda]: { o1: 150000, o3: 20000, o6: 6600, o10: 600 },
			[Drivers.Bottas]: { o1: 200000, o3: 25000, o6: 6600, o10: 900 },
			[Drivers.Zhou]: { o1: 200000, o3: 25000, o6: 6600, o10: 900 },
			[Drivers.Albon]: { o1: 6600, o3: 1200, o6: 275, o10: -275 },
			[Drivers.Sargeant]: { o1: 25000, o3: 5000, o6: 6600, o10: 900 },
			[Drivers.Hulkenberg]: { o1: 50000, o3: 10000, o6: 1200, o10: 160 },
			[Drivers.Magnussen]: { o1: 50000, o3: 15000, o6: 3300, o10: 300 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Norris,
			Drivers.Hamilton,
			Drivers.Piastri,
			Drivers.Russell,
			Drivers.Perez,
			Drivers.Alonso,
			Drivers.Albon,
			Drivers.Leclerc,
			Drivers.Sainz,
			Drivers.Sargeant,
			Drivers.Bottas,
			Drivers.Hulkenberg,
			Drivers.Stroll,
			Drivers.Zhou,
			Drivers.Tsunoda,
			Drivers.DeVries,
			Drivers.Gasly,
			Drivers.Magnussen,
			Drivers.Ocon
		]
	},
	{
		name: 'Hungary',
		odds: {
			[Drivers.Hamilton]: { o1: 1400, o3: 175, o6: -350, o10: -700 },
			[Drivers.Russell]: { o1: 1600, o3: 350, o6: -200, o10: -400 },
			[Drivers.Verstappen]: { o1: -275, o3: -600, o6: -1000, o10: -1200 },
			[Drivers.Perez]: { o1: 1400, o3: -110, o6: -500, o10: -700 },
			[Drivers.Leclerc]: { o1: 1600, o3: 250, o6: -225, o10: -500 },
			[Drivers.Sainz]: { o1: 1200, o3: 350, o6: -190, o10: -400 },
			[Drivers.Piastri]: { o1: 15000, o3: 5000, o6: 500, o10: -170 },
			[Drivers.Norris]: { o1: 1400, o3: 150, o6: -375, o10: -500 },
			[Drivers.Stroll]: { o1: 15000, o3: 4000, o6: 600, o10: -175 },
			[Drivers.Alonso]: { o1: 1400, o3: 100, o6: -500, o10: -700 },
			[Drivers.Gasly]: { o1: 10000, o3: 3300, o6: 400, o10: -200 },
			[Drivers.Ocon]: { o1: 10000, o3: 3300, o6: 400, o10: -225 },
			[Drivers.DeVries]: { o1: 50000, o3: 5000, o6: 2000, o10: 250 },
			[Drivers.Tsunoda]: { o1: 50000, o3: 10000, o6: 3300, o10: 250 },
			[Drivers.Bottas]: { o1: 50000, o3: 10000, o6: 5000, o10: 500 },
			[Drivers.Zhou]: { o1: 50000, o3: 10000, o6: 5000, o10: 900 },
			[Drivers.Albon]: { o1: 50000, o3: 10000, o6: 275, o10: 250 },
			[Drivers.Sargeant]: { o1: 50000, o3: 20000, o6: 5000, o10: 900 },
			[Drivers.Hulkenberg]: { o1: 50000, o3: 10000, o6: 3300, o10: 450 },
			[Drivers.Magnussen]: { o1: 50000, o3: 10000, o6: 3300, o10: 500 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Norris,
			Drivers.Perez,
			Drivers.Hamilton,
			Drivers.Piastri,
			Drivers.Russell,
			Drivers.Leclerc,
			Drivers.Sainz,
			Drivers.Alonso,
			Drivers.Stroll,
			Drivers.Albon,
			Drivers.Bottas,
			Drivers.DeVries,
			Drivers.Hulkenberg,
			Drivers.Tsunoda,
			Drivers.Zhou,
			Drivers.Magnussen,
			Drivers.Sargeant,
			Drivers.Ocon,
			Drivers.Gasly
		]
	},
	{
		name: 'Belgium',
		odds: {
			[Drivers.Hamilton]: { o1: 1600, o3: -150, o6: -500, o10: -800 },
			[Drivers.Russell]: { o1: 6500, o3: 900, o6: -120, o10: -350 },
			[Drivers.Verstappen]: { o1: -400, o3: -700, o6: -1000, o10: -1200 },
			[Drivers.Perez]: { o1: 600, o3: -300, o6: -600, o10: -1000 },
			[Drivers.Leclerc]: { o1: 2000, o3: 160, o6: -300, o10: -600 },
			[Drivers.Sainz]: { o1: 4000, o3: 900, o6: -120, o10: -450 },
			[Drivers.Piastri]: { o1: 2000, o3: 275, o6: -275, o10: -500 },
			[Drivers.Norris]: { o1: 2800, o3: 275, o6: -300, o10: -600 },
			[Drivers.Stroll]: { o1: 10000, o3: 10000, o6: 800, o10: -150 },
			[Drivers.Alonso]: { o1: 10000, o3: 900, o6: 125, o10: -300 },
			[Drivers.Gasly]: { o1: 25000, o3: 12500, o6: 1000, o10: 135 },
			[Drivers.Ocon]: { o1: 50000, o3: 12500, o6: 1000, o10: 150 },
			[Drivers.DeVries]: { o1: 100000, o3: 25000, o6: 3000, o10: 400 },
			[Drivers.Tsunoda]: { o1: 20000, o3: 10000, o6: 1000, o10: 120 },
			[Drivers.Bottas]: { o1: 50000, o3: 20000, o6: 2000, o10: 225 },
			[Drivers.Zhou]: { o1: 150000, o3: 25000, o6: 4000, o10: 600 },
			[Drivers.Albon]: { o1: 50000, o3: 15000, o6: 1400, o10: 150 },
			[Drivers.Sargeant]: { o1: 200000, o3: 50000, o6: 5000, o10: 600 },
			[Drivers.Hulkenberg]: { o1: 100000, o3: 25000, o6: 3000, o10: 600 },
			[Drivers.Magnussen]: { o1: 50000, o3: 25000, o6: 2500, o10: 450 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Perez,
			Drivers.Leclerc,
			Drivers.Hamilton,
			Drivers.Alonso,
			Drivers.Russell,
			Drivers.Norris,
			Drivers.Ocon,
			Drivers.Stroll,
			Drivers.Tsunoda,
			Drivers.Gasly,
			Drivers.Bottas,
			Drivers.Zhou,
			Drivers.Albon,
			Drivers.Magnussen,
			Drivers.DeVries,
			Drivers.Sargeant,
			Drivers.Hulkenberg,
			Drivers.Sainz,
			Drivers.Piastri
		]
	},
	{
		name: 'Netherlands',
		odds: {
			[Drivers.Hamilton]: { o1: 1100, o3: -165, o6: -600, o10: -900 },
			[Drivers.Russell]: { o1: 3300, o3: 450, o6: -200, o10: -600 },
			[Drivers.Verstappen]: { o1: -450, o3: -900, o6: -1000, o10: -1200 },
			[Drivers.Perez]: { o1: 1200, o3: -150, o6: -500, o10: -900 },
			[Drivers.Leclerc]: { o1: 4000, o3: 500, o6: -165, o10: -500 },
			[Drivers.Sainz]: { o1: 5000, o3: 700, o6: 150, o10: -350 },
			[Drivers.Piastri]: { o1: 3300, o3: 450, o6: -180, o10: -400 },
			[Drivers.Norris]: { o1: 1400, o3: 105, o6: -400, o10: -900 },
			[Drivers.Stroll]: { o1: 25000, o3: 5000, o6: 450, o10: -140 },
			[Drivers.Alonso]: { o1: 4000, o3: 500, o6: -150, o10: -400 },
			[Drivers.Gasly]: { o1: 50000, o3: 6600, o6: 1200, o10: 150 },
			[Drivers.Ocon]: { o1: 100000, o3: 6600, o6: 1200, o10: 160 },
			[Drivers.DeVries]: { o1: 200000, o3: 25000, o6: 6600, o10: 800 },
			[Drivers.Tsunoda]: { o1: 100000, o3: 15000, o6: 4000, o10: 400 },
			[Drivers.Bottas]: { o1: 100000, o3: 10000, o6: 2000, o10: 250 },
			[Drivers.Zhou]: { o1: 100000, o3: 10000, o6: 2000, o10: 240 },
			[Drivers.Albon]: { o1: 25000, o3: 5000, o6: 500, o10: -175 },
			[Drivers.Sargeant]: { o1: 100000, o3: 15000, o6: 4000, o10: 240 },
			[Drivers.Hulkenberg]: { o1: 200000, o3: 50000, o6: 6600, o10: 800 },
			[Drivers.Magnussen]: { o1: 200000, o3: 50000, o6: 6600, o10: 800 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Alonso,
			Drivers.Gasly,
			Drivers.Perez,
			Drivers.Sainz,
			Drivers.Hamilton,
			Drivers.Norris,
			Drivers.Albon,
			Drivers.Piastri,
			Drivers.Ocon,
			Drivers.Stroll,
			Drivers.Hulkenberg,
			Drivers.DeVries,
			Drivers.Bottas,
			Drivers.Tsunoda,
			Drivers.Magnussen,
			Drivers.Russell,
			Drivers.Zhou,
			Drivers.Leclerc,
			Drivers.Sargeant
		]
	},
	{
		name: 'Italy',
		odds: {
			[Drivers.Hamilton]: { o1: 3300, o3: 350, o6: -200, o10: -600 },
			[Drivers.Russell]: { o1: 5000, o3: 600, o6: -140, o10: -500 },
			[Drivers.Verstappen]: { o1: -500, o3: -800, o6: -1000, o10: -1200 },
			[Drivers.Perez]: { o1: 900, o3: -150, o6: -600, o10: -800 },
			[Drivers.Leclerc]: { o1: 1400, o3: 125, o6: -400, o10: -600 },
			[Drivers.Sainz]: { o1: 1400, o3: 125, o6: -400, o10: -600 },
			[Drivers.Piastri]: { o1: 5000, o3: 600, o6: 135, o10: -300 },
			[Drivers.Norris]: { o1: 3300, o3: 325, o6: -275, o10: -600 },
			[Drivers.Stroll]: { o1: 50000, o3: 6600, o6: 1600, o10: -140 },
			[Drivers.Alonso]: { o1: 4000, o3: 350, o6: -150, o10: -500 },
			[Drivers.Gasly]: { o1: 100000, o3: 10000, o6: 2000, o10: 100 },
			[Drivers.Ocon]: { o1: 100000, o3: 10000, o6: 2000, o10: 100 },
			[Drivers.DeVries]: { o1: 100000, o3: 50000, o6: 10000, o10: 600 },
			[Drivers.Tsunoda]: { o1: 100000, o3: 50000, o6: 10000, o10: 500 },
			[Drivers.Bottas]: { o1: 300000, o3: 50000, o6: 20000, o10: 900 },
			[Drivers.Zhou]: { o1: 300000, o3: 50000, o6: 20000, o10: 900 },
			[Drivers.Albon]: { o1: 10000, o3: 900, o6: 135, o10: -350 },
			[Drivers.Sargeant]: { o1: 100000, o3: 10000, o6: 5000, o10: 250 },
			[Drivers.Hulkenberg]: { o1: 200000, o3: 50000, o6: 15000, o10: 800 },
			[Drivers.Magnussen]: { o1: 200000, o3: 50000, o6: 15000, o10: 800 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Perez,
			Drivers.Sainz,
			Drivers.Leclerc,
			Drivers.Russell,
			Drivers.Hamilton,
			Drivers.Albon,
			Drivers.Norris,
			Drivers.Alonso,
			Drivers.Bottas,
			Drivers.DeVries,
			Drivers.Piastri,
			Drivers.Sargeant,
			Drivers.Zhou,
			Drivers.Gasly,
			Drivers.Stroll,
			Drivers.Hulkenberg,
			Drivers.Magnussen,
			Drivers.Ocon,
			Drivers.Tsunoda
		]
	},
	{
		name: 'Singapore',
		odds: {
			[Drivers.Hamilton]: { o1: 2000, o3: 300, o6: -300, o10: -700 },
			[Drivers.Russell]: { o1: 2000, o3: 300, o6: -250, o10: -600 },
			[Drivers.Verstappen]: { o1: -225, o3: -600, o6: -800, o10: -1000 },
			[Drivers.Perez]: { o1: 1800, o3: 135, o6: -500, o10: -800 },
			[Drivers.Leclerc]: { o1: 600, o3: 120, o6: -350, o10: -700 },
			[Drivers.Sainz]: { o1: 1200, o3: 150, o6: -350, o10: -600 },
			[Drivers.Piastri]: { o1: 6600, o3: 800, o6: 240, o10: -275 },
			[Drivers.Norris]: { o1: 2000, o3: 225, o6: -400, o10: -700 },
			[Drivers.Stroll]: { o1: 25000, o3: 10000, o6: 1200, o10: -175 },
			[Drivers.Alonso]: { o1: 1400, o3: 150, o6: -400, o10: -700 },
			[Drivers.Gasly]: { o1: 75000, o3: 12500, o6: 1400, o10: 110 },
			[Drivers.Ocon]: { o1: 75000, o3: 12500, o6: 1400, o10: 110 },
			[Drivers.DeVries]: { o1: 100000, o3: 40000, o6: 6600, o10: 500 },
			[Drivers.Tsunoda]: { o1: 75000, o3: 25000, o6: 5000, o10: 175 },
			[Drivers.Bottas]: { o1: 100000, o3: 40000, o6: 6600, o10: 550 },
			[Drivers.Zhou]: { o1: 150000, o3: 40000, o6: 10000, o10: 550 },
			[Drivers.Albon]: { o1: 75000, o3: 12500, o6: 1400, o10: -120 },
			[Drivers.Sargeant]: { o1: 200000, o3: 60000, o6: 12500, o10: 900 },
			[Drivers.Hulkenberg]: { o1: 100000, o3: 60000, o6: 12500, o10: 1000 },
			[Drivers.Magnussen]: { o1: 100000, o3: 60000, o6: 12500, o10: 1000 }
		},
		results: [
			Drivers.Sainz,
			Drivers.Norris,
			Drivers.Hamilton,
			Drivers.Leclerc,
			Drivers.Verstappen,
			Drivers.Gasly,
			Drivers.Piastri,
			Drivers.Perez,
			Drivers.DeVries,
			Drivers.Magnussen,
			Drivers.Albon,
			Drivers.Zhou,
			Drivers.Hulkenberg,
			Drivers.Sargeant,
			Drivers.Alonso,
			Drivers.Russell,
			Drivers.Bottas,
			Drivers.Ocon,
			Drivers.Tsunoda,
			Drivers.Stroll
		]
	},
	{
		name: 'Japan',
		odds: {
			[Drivers.Hamilton]: { o1: 2500, o3: 350, o6: -250, o10: -600 },
			[Drivers.Russell]: { o1: 2500, o3: 400, o6: -250, o10: -500 },
			[Drivers.Verstappen]: { o1: -500, o3: -700, o6: -1000, o10: -1200 },
			[Drivers.Perez]: { o1: 1200, o3: -162, o6: -500, o10: -800 },
			[Drivers.Leclerc]: { o1: 1800, o3: 200, o6: -300, o10: -600 },
			[Drivers.Sainz]: { o1: 1800, o3: 225, o6: -300, o10: -600 },
			[Drivers.Piastri]: { o1: 5000, o3: 550, o6: -150, o10: -400 },
			[Drivers.Norris]: { o1: 1600, o3: -137, o6: -500, o10: -800 },
			[Drivers.Stroll]: { o1: 25000, o3: 8000, o6: 1200, o10: 100 },
			[Drivers.Alonso]: { o1: 5000, o3: 900, o6: 150, o10: -350 },
			[Drivers.Gasly]: { o1: 100000, o3: 10000, o6: 2000, o10: 150 },
			[Drivers.Ocon]: { o1: 100000, o3: 10000, o6: 2000, o10: 150 },
			[Drivers.DeVries]: { o1: 100000, o3: 10000, o6: 1800, o10: 150 },
			[Drivers.Tsunoda]: { o1: 100000, o3: 10000, o6: 1800, o10: 125 },
			[Drivers.Bottas]: { o1: 150000, o3: 20000, o6: 3300, o10: 550 },
			[Drivers.Zhou]: { o1: 150000, o3: 20000, o6: 3300, o10: 550 },
			[Drivers.Albon]: { o1: 25000, o3: 2500, o6: 700, o10: -135 },
			[Drivers.Sargeant]: { o1: 250000, o3: 30000, o6: 10000, o10: 1000 },
			[Drivers.Hulkenberg]: { o1: 200000, o3: 20000, o6: 10000, o10: 900 },
			[Drivers.Magnussen]: { o1: 200000, o3: 20000, o6: 10000, o10: 900 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Norris,
			Drivers.Piastri,
			Drivers.Leclerc,
			Drivers.Hamilton,
			Drivers.Sainz,
			Drivers.Russell,
			Drivers.Alonso,
			Drivers.Ocon,
			Drivers.Gasly,
			Drivers.DeVries,
			Drivers.Tsunoda,
			Drivers.Zhou,
			Drivers.Hulkenberg,
			Drivers.Magnussen,
			Drivers.Albon,
			Drivers.Sargeant,
			Drivers.Stroll,
			Drivers.Perez,
			Drivers.Bottas
		]
	},
	{
		name: 'Qatar',
		odds: {
			[Drivers.Hamilton]: { o1: 2500, o3: 275, o6: -250, o10: -650 },
			[Drivers.Russell]: { o1: 2500, o3: 550, o6: -225, o10: -600 },
			[Drivers.Verstappen]: { o1: -450, o3: -700, o6: -1200, o10: -1400 },
			[Drivers.Perez]: { o1: 1200, o3: -165, o6: -500, o10: -800 },
			[Drivers.Leclerc]: { o1: 2500, o3: 350, o6: -225, o10: -600 },
			[Drivers.Sainz]: { o1: 2800, o3: 450, o6: -200, o10: -500 },
			[Drivers.Piastri]: { o1: 1600, o3: 150, o6: -400, o10: -700 },
			[Drivers.Norris]: { o1: 1200, o3: -190, o6: -500, o10: -900 },
			[Drivers.Stroll]: { o1: 50000, o3: 6600, o6: 900, o10: 125 },
			[Drivers.Alonso]: { o1: 8000, o3: 900, o6: 200, o10: -400 },
			[Drivers.Gasly]: { o1: 50000, o3: 6600, o6: 900, o10: -140 },
			[Drivers.Ocon]: { o1: 50000, o3: 6600, o6: 900, o10: -140 },
			[Drivers.DeVries]: { o1: 50000, o3: 10000, o6: 2500, o10: 225 },
			[Drivers.Tsunoda]: { o1: 50000, o3: 10000, o6: 2500, o10: 225 },
			[Drivers.Bottas]: { o1: 50000, o3: 15000, o6: 4000, o10: 350 },
			[Drivers.Zhou]: { o1: 50000, o3: 15000, o6: 5000, o10: 700 },
			[Drivers.Albon]: { o1: 50000, o3: 6600, o6: 1200, o10: 150 },
			[Drivers.Sargeant]: { o1: 50000, o3: 25000, o6: 10000, o10: 1400 },
			[Drivers.Hulkenberg]: { o1: 50000, o3: 25000, o6: 6600, o10: 1000 },
			[Drivers.Magnussen]: { o1: 50000, o3: 25000, o6: 6600, o10: 1000 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Piastri,
			Drivers.Norris,
			Drivers.Russell,
			Drivers.Leclerc,
			Drivers.Alonso,
			Drivers.Ocon,
			Drivers.Bottas,
			Drivers.Zhou,
			Drivers.Perez,
			Drivers.Stroll,
			Drivers.Gasly,
			Drivers.Albon,
			Drivers.Magnussen,
			Drivers.Tsunoda,
			Drivers.Hulkenberg,
			Drivers.DeVries,
			Drivers.Sargeant,
			Drivers.Hamilton,
			Drivers.Sainz
		]
	},
	{
		name: 'Texas',
		odds: {
			[Drivers.Hamilton]: { o1: 2500, o3: 240, o6: -300, o10: -600 },
			[Drivers.Russell]: { o1: 2500, o3: 300, o6: -300, o10: -600 },
			[Drivers.Verstappen]: { o1: -450, o3: -700, o6: -1200, o10: -1800 },
			[Drivers.Perez]: { o1: 1800, o3: 160, o6: -300, o10: -700 },
			[Drivers.Leclerc]: { o1: 2500, o3: 350, o6: -150, o10: -500 },
			[Drivers.Sainz]: { o1: 2800, o3: 400, o6: -150, o10: -500 },
			[Drivers.Piastri]: { o1: 1200, o3: -110, o6: -600, o10: -800 },
			[Drivers.Norris]: { o1: 1200, o3: -165, o6: -600, o10: -800 },
			[Drivers.Stroll]: { o1: 50000, o3: 12500, o6: 1600, o10: 150 },
			[Drivers.Alonso]: { o1: 6600, o3: 1200, o6: 100, o10: -500 },
			[Drivers.Gasly]: { o1: 25000, o3: 6600, o6: 900, o10: -175 },
			[Drivers.Ocon]: { o1: 25000, o3: 6600, o6: 900, o10: -175 },
			[Drivers.DeVries]: { o1: 50000, o3: 25000, o6: 5000, o10: 700 },
			[Drivers.Tsunoda]: { o1: 50000, o3: 25000, o6: 4000, o10: 300 },
			[Drivers.Bottas]: { o1: 50000, o3: 25000, o6: 4000, o10: 350 },
			[Drivers.Zhou]: { o1: 50000, o3: 25000, o6: 4000, o10: 400 },
			[Drivers.Albon]: { o1: 50000, o3: 12500, o6: 1600, o10: 150 },
			[Drivers.Sargeant]: { o1: 50000, o3: 50000, o6: 6600, o10: 1200 },
			[Drivers.Hulkenberg]: { o1: 50000, o3: 50000, o6: 6600, o10: 350 },
			[Drivers.Magnussen]: { o1: 50000, o3: 50000, o6: 6600, o10: 600 }
		},
		results: [
			Drivers.Verstappen,
			Drivers.Norris,
			Drivers.Sainz,
			Drivers.Perez,
			Drivers.Russell,
			Drivers.Gasly,
			Drivers.Stroll,
			Drivers.Tsunoda,
			Drivers.Albon,
			Drivers.Sargeant,
			Drivers.Hulkenberg,
			Drivers.Bottas,
			Drivers.Zhou,
			Drivers.Magnussen,
			Drivers.DeVries,
			Drivers.Hamilton,
			Drivers.Leclerc,
			Drivers.Alonso,
			Drivers.Piastri,
			Drivers.Ocon
		]
	},
	{
		name: 'Mexico',
		odds: {
			[Drivers.Hamilton]: { o1: 800, o3: -150, o6: -500, o10: -900 },
			[Drivers.Russell]: { o1: 2000, o3: 175, o6: -500, o10: -700 },
			[Drivers.Verstappen]: { o1: -350, o3: -700, o6: -1000, o10: -1400 },
			[Drivers.Perez]: { o1: 1600, o3: 115, o6: -500, o10: -700 },
			[Drivers.Leclerc]: { o1: 3300, o3: 600, o6: -225, o10: -600 },
			[Drivers.Sainz]: { o1: 4000, o3: 700, o6: -125, o10: -500 },
			[Drivers.Piastri]: { o1: 3300, o3: 600, o6: -120, o10: -500 },
			[Drivers.Norris]: { o1: 1400, o3: 1400, o6: -500, o10: -700 },
			[Drivers.Stroll]: { o1: 30000, o3: 6600, o6: 2500, o10: 200 },
			[Drivers.Alonso]: { o1: 6600, o3: 2000, o6: 250, o10: -175 },
			[Drivers.Gasly]: { o1: 25000, o3: 6600, o6: 900, o10: -110 },
			[Drivers.Ocon]: { o1: 25000, o3: 6600, o6: 900, o10: -110 },
			[Drivers.DeVries]: { o1: 25000, o3: 5000, o6: 1200, o10: 150 },
			[Drivers.Tsunoda]: { o1: 50000, o3: 15000, o6: 5000, o10: 550 },
			[Drivers.Bottas]: { o1: 25000, o3: 5000, o6: 1600, o10: 175 },
			[Drivers.Zhou]: { o1: 50000, o3: 15000, o6: 4000, o10: 175 },
			[Drivers.Albon]: { o1: 5000, o3: 1600, o6: 225, o10: -250 },
			[Drivers.Sargeant]: { o1: 100000, o3: 25000, o6: 10000, o10: 800 },
			[Drivers.Hulkenberg]: { o1: 100000, o3: 25000, o6: 10000, o10: 1200 },
			[Drivers.Magnussen]: { o1: 200000, o3: 25000, o6: 10000, o10: 1200 }
		}
	}
];

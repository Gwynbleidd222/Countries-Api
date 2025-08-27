export interface Country {
	cca3: string
	name: {
		common: string
		official: string
		nativeName: {
			[key: string]: {
				official: string
				common: string
			}
		}
	}
	capital?: string[]
	region: string
	population: number
	area: number
	borders?: string[]
	flags: {
		png: string
		svg: string
	}
	subregion?: string
	tld: string[]
}

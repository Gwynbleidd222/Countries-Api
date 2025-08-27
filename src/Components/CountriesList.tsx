import React, { useState } from 'react'
import CountryCard from './CountryCard'
import type { Country } from '../types/Country'
import SearchInput from './Search/SearchInput'
import SearchFilter from './Search/SearchFilter'

type CountriesListProps = {
	countries: Country[]
	isDarkMode: boolean
}

const CountriesList: React.FC<CountriesListProps> = ({ countries, isDarkMode }) => {
	const [search, setSearch] = useState('')
	const [continent, setContinent] = useState<string>('All')

	const searchTerm = search.toLowerCase()

	const searchCountry = countries.filter(c => {
		const matchesSearch = c.name.common.toLowerCase().includes(searchTerm)
		const matchesContinent = continent === 'All' ? true : c.region === continent
		return matchesSearch && matchesContinent
	})

	return (
		<div>
			<div className='flex flex-col justify-between md:flex-row 2xl:justify-around'>
			<SearchInput 
				search={search} 
				setSearch={setSearch} 
				isDarkMode={isDarkMode} 
			/>
			<SearchFilter 
				continent={continent} 
				setContinent={setContinent} 
				isDarkMode={isDarkMode}
			/>
			</div>
			<div className='flex flex-wrap gap-14 justify-center p-6 2xl:mx-auto 2xl:w-3/4'>
				{searchCountry.map(country => (
					<CountryCard key={country.cca3} country={country} isDarkMode={isDarkMode} />
				))}
			</div>
		</div>
	)
}

export default CountriesList

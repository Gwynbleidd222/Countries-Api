import { Link } from 'react-router-dom'
import type { Country } from '../types/Country'

interface CountryCardProps {
	country: Country
	isDarkMode: boolean
}

const CountryCard: React.FC<CountryCardProps> = ({ country, isDarkMode }) => {
	return (
		<Link to={`/country/${country.cca3}`}>
		<div className={`border-b-light-mode-background shadow-md ${isDarkMode ? 'dark-nav' : 'light-nav'}` }>
			<img
				src={country.flags.svg}
				alt={`Flag of ${country.name.common}`}
				className='w-[264px] h-[160px] object-cover'
			/>
			<h3 className='font-bold p-4 mt-4 w-[264px] h-[80px]'>{country.name.official}</h3>
			<div className='font-bold p-4'>
				<div>
					<p>
						Population: <span className='font-light'>{country.population}</span>
					</p>
					<p>
						Region: <span className='font-light'>{country.region}</span>
					</p>
					<p className='mb-4'>
						Capital: <span className='font-light overflow-wrap'>{country.capital?.join(', ')}</span>
					</p>
				</div>
			</div>
		</div>
		</Link>
	)
}

export default CountryCard

import { useParams, Link } from 'react-router-dom'
import type { Country } from '../types/Country'

type Props = {
	countries: Country[]
	isDarkMode: boolean
}

const CountryPage: React.FC<Props> = ({ countries, isDarkMode }) => {
	const { id } = useParams<{ id: string }>()
	const country = countries.find(c => c.cca3 === id)

	if (!country) return <p>Didin't find a country</p>
	return (
		<div className=' p-6 '>
            <div className='lg:max-w-[1200px] lg:mx-auto'>
			<Link to='/'>
				<button
					className={`cursor-pointer w-[100px] rounded-md border-b-light-mode-background shadow-md p-2 ${
						isDarkMode ? 'dark-nav' : 'light-nav'
					}`}>
					Back
				</button>
			</Link>
            </div>
			<div className='lg:flex lg:justify-between lg:items-center lg:max-w-[1200px] lg:mx-auto'>
				<img
					className='mt-12 border-b-light-mode-background shadow-md object-cover max-w-[550px] max-h-[390px]'
					src={country.flags.svg}
					alt={country.name.common}
				/>
				<div className='font-bold '>
					<h3 className='mt-6 text-2xl'>{country.name.common}</h3>
					<p className='mt-6 '>
						Native Name:
						<span className='pl-2 font-light'>
							{country.name.nativeName && Object.values(country.name.nativeName)[0].common}
						</span>
					</p>
					<p className='mt-2'>
						Population:
						<span className='pl-2 font-light'>{country.population}</span>
					</p>
					<p className='mt-2'>
						Region:
						<span className='pl-2 font-light'>{country.region}</span>
					</p>
					<p className='mt-2'>
						Sub Region:
						<span className='pl-2 font-light'>{country.subregion}</span>
					</p>
					<p className='mt-2'>
						Capitol:
						<span className='pl-2 font-light'>{country.capital}</span>
					</p>
					<p className='mt-2'>
						Top Level Domain:
						<span className='pl-2 font-light'>{country.tld}</span>
					</p>
					<div>
						<h4 className=' mt-6'>Border Countries:</h4>
						<div className='flex flex-wrap gap-6 content-center md:pl-2'>
							{country.borders?.map((c, index) => (
								<p
									className={`rounded-md border-b-light-mode-background shadow-md p-2 mt-2 font-light ${
										isDarkMode ? 'dark-nav' : 'light-nav'
									}`}
									key={index}>
									{c}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CountryPage

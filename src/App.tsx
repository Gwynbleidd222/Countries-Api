import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { Country } from './types/Country'
import Nav from './Components/Nav'
import CountriesList from './Components/CountriesList'
import CountryPage from './Components/CountryPage'

function App() {
	const [countries, setCountries] = useState<Country[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

	const toggleTheme = () => {
		setIsDarkMode(prev => !prev)
	}

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	useEffect(() => {
		const fetchCountries = async () => {
			try {
				const res = await fetch(
					'https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,borders,flags,cca3,tld'
				)
				const data: Country[] = await res.json()
				console.log('API response:', data)
				setCountries(data)
			} catch (error) {
				console.log('Błąd w pobieraniu krajów', error)
			} finally {
				setLoading(false)
			}
		}
		fetchCountries()
	}, [])

	if (loading) return <p>Loading data...</p>

	return (
		<Router>
			<Nav toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
			<Routes>
				<Route path='/' element={<CountriesList countries={countries} isDarkMode={isDarkMode} />} />
				<Route path="/country/:id" element={<CountryPage countries={countries} isDarkMode={isDarkMode} />} />
			</Routes>
		</Router>
	)
}

export default App

type Props = {
	continent: string
	setContinent: React.Dispatch<React.SetStateAction<string>>
	isDarkMode: boolean
}

const SearchFilter: React.FC<Props> = ({ continent, setContinent, isDarkMode }) => {
	return (
		<div className="p-6">
			<select
				value={continent}
				onChange={e => setContinent(e.target.value)}
				className={`${isDarkMode ? 'dark-nav' : 'light'}  w-1/2 md:w-[200px]  p-2 border-b-light-mode-background shadow-md cursor-pointer`}>
				<option value='All'>Filer by Region</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</div>
	)
}

export default SearchFilter

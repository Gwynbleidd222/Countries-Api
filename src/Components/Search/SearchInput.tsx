type Props = {
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
    isDarkMode: boolean
}

const SearchInput: React.FC<Props> = ({search, setSearch, isDarkMode}) => {

  return (
    <div className="relative p-6 w-full md:w-[500px]">
        
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        type="text" 
        className={`w-full md:w-[500px] border-b-light-mode-background shadow-md p-2 ${isDarkMode ? 'dark-nav' : 'light'}`} 
        placeholder='🔍  Search for a country...'/>
    </div>
  )
}

export default SearchInput

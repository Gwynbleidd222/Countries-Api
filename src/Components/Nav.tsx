import { FaRegMoon } from 'react-icons/fa6'
import { CiSun } from 'react-icons/ci'

type NavProps = {
	toggleTheme: () => void
	isDarkMode: boolean
}

const Nav: React.FC<NavProps> = ({ toggleTheme, isDarkMode }) => {
	return (
		<nav
			className={`w-full  border-b-light-mode-background shadow-md
					${isDarkMode ? 'dark-nav' : 'light'}
			`}>
			<div className='flex items-center justify-between 2xl:justify-around'>
				<h1 className='font-bold p-4 m-4 lg:text-2xl'>Where in the world?</h1>

				<button className='flex items-center p-4 m-4 cursor-pointer' onClick={toggleTheme}>
					{isDarkMode ? <CiSun className='mr-2 w-[20px] h-[20px]' /> : <FaRegMoon className='mr-2 w-[20px] h-[20px]' />}
					<span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
				</button>
			</div>
		</nav>
	)
}

export default Nav

import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function DashboardHeader() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
        navigate('/login');
    }

    return (
        <header className="bg-blue-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                <Link to="/dashboard" className="text-xl font-bold">
                    🧭 My Dashboard
                </Link>
                <nav className="flex items-center space-x-6">
                    <ul className="flex gap-6">
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/setting" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Settings</NavLink>
                        </li>

                    </ul>
                    <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default DashboardHeader
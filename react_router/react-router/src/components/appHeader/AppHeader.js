
import {Link} from 'react-router-dom';


const AppHeader = () => {
    return (
        <header>
            <h1>
                <Link to="/">
                    <span>Marvel</span>
                </Link>
            </h1>
            <nav>
                <ul>
                    <li><Link to="/">Comics</Link></li>
                    <li><Link to="/characters">Charecters</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;
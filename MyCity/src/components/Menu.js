import { Link } from 'react-router-dom';

export default function Menu() {
    return (
    <div style={{ backgroundColor: '#545ffcff', padding: '20px' }}>
    <nav>
        <ul className='menu' style={{ listStyleType: 'none', margin: 0, padding: 10, display: 'flex', flexDirection: 'row', gap: '15px' }}>
            <li>
                <Link to="/">Головна</Link>
            </li>
            <li>
                <Link to="/about">Інформація про місто</Link> 
            </li>
            <li>
                <Link to="/main-attraction">Найвідоміша пам'ятка міста</Link>
            </li>
            <li>
                <Link to="/other-attractions">Інші пам'ятки</Link>
            </li>
            <li>
                <Link to="/photos">Фотографії міста</Link>
            </li>
        </ul>
    </nav>
    </div>
);
}


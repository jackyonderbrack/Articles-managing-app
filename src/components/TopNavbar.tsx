

interface TopNavbarProps {
    user: string
    newTitle: string
}

const TopNavbar: React.FC<TopNavbarProps> = ({user}) => {
    
    
    

    return (
        <nav className="top-navbar">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <input type="text" placeholder="Tytuł artykułu"/>
            <button>+ Dodaj artykuł</button>
            <p>Log: <b>{user}</b></p>
        </nav>
    );
}

export default TopNavbar
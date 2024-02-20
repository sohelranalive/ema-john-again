import '../Header/Header.css'
import logo from '../../assets/images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo}></img>
            <div>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">LogIn</a>
            </div>
        </nav>
    );
};

export default Header;
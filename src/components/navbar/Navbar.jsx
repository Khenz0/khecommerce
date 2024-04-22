import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { Home, Package, ShoppingCart } from "lucide-react";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex gap-10 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li className="flex items-center flex-col justify-items-center">
                <Link to={'/'} className="flex flex-col items-center">
                <Home size={25}/>
                    Home</Link>
            </li>

            {/* All Product */}
            <li className="flex items-center flex-col justify-items-center">
                <Link to={'/allproduct'} className="flex flex-col items-center">
                    <Package size={25}/>
                    All Products</Link>
            </li>


            {/* Cart */}
            <li className="flex items-center flex-col justify-items-center">
                <Link to={'/cart'} className="flex flex-col items-center">
                    <ShoppingCart size={25}/>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )

    const registration = (
        <ul className="flex gap-4 text-white font-medium text-md px-5 ">
            {/* Home */}

            {/* Signup */}
            {!user ? <li className="flex items-center flex-col justify-items-center">
                <Link to={'/signup'} className="flex flex-col items-center">
                    
                    Signup</Link>
            </li> : ""}

            {/* Login */}
            {!user ? <li>
                <Link to={'/login'} className="bg-black p-3 rounded-lg ">Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                Logout
            </li>}
        </ul>
    )
    return (
        <nav className="bg-blue-600 md:sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* left  */}
                <div className="left py-3 lg:py-0 flex items-center justify-center">
                    
                    <Link to={'/'}>
                        <img className="mr-2 h-20 bg-cover" src="https://i.imgur.com/9wKvCN3.png" alt="img" />
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                

                <div className="right flex md:flex-row flex-col justify-center mb-4 lg:mb-0 items-center gap-5">
                    {/* Search Bar  */}
                    <SearchBar />
                    {registration}
                </div>


            </div>
        </nav>

    );
}

export default Navbar;
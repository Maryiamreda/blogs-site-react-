import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Net Ninja Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    borderStyle: "none"
                }}>New Blog</Link>

            </div>

        </nav>

    );
}

export default Navbar;
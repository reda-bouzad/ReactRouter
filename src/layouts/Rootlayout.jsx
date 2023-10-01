import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="root-layout">
            <nav>
                <div className="my-heading">
                    <h1>Jobarouter</h1>
                </div>
                <div className="my-links">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
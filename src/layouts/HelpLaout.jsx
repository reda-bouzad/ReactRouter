import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
    return (
        <>
            <div className="help-layout">
                <h1>Help</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum ratione minus illo iure sapiente, repellendus dignissimos sequi quia doloremque porro voluptatem impedit voluptas quas at nemo vitae asperiores iusto. Ad totam molestias iste, similique architecto ratione, labore sunt quibusdam impedit cupiditate iure omnis facere vitae maxime dolorem quisquam. Ut.</p>
            </div>
            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact us</NavLink>
            </nav>
            <div className="box">
                <Outlet />
            </div>
        </>
    );
}

export default HelpLayout;
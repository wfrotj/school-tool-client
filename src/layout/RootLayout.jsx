import { NavLink, Outlet, useNavigate } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header className="root-layout">
        <nav>
          <h1>Welcome user!</h1>

          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="account">Account</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

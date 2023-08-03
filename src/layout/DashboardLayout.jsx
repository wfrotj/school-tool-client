import { NavLink, Outlet } from "react-router-dom";
function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* <h1>Dashboard</h1> */}
      <div>
        <aside className="aside">
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="lessons">Lesson Plan</NavLink>
          <NavLink to="grades">Grading Sheet</NavLink>
        </aside>
      </div>

      <section className="main">
        <Outlet />
      </section>
    </div>
  );
}

export default DashboardLayout;

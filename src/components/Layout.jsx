import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Outlet />
    </div>
  );
}

export default Layout;
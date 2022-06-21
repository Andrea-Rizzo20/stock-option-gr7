import { Navigate, Outlet } from "react-router-dom";
export function Protected({ user, children }) {
  if (!user) {
    return <Navigate to="home" replace />;
  }
  return children ? children : <Outlet />;
}

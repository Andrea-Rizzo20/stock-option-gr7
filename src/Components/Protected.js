import { Navigate, Outlet } from "react-router-dom";

function Protected({ user, children }) {
  if (!user) {
    return <Navigate to="home" replace />;
  }
  return children ? children : <Outlet />;
}

export default Protected;

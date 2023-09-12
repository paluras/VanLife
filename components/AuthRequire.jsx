import { Navigate, Outlet } from "react-router-dom";

const AuthReq = () => {
    const auth = localStorage.getItem("loggedin")
  if (!auth) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthReq;

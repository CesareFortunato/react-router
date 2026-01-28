import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function DefaultLayout() {
  return (
    <>
      <MainNav />

      <main className="container my-4">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;

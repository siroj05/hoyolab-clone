import { Outlet } from "react-router-dom";

export default function AccountCenterLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

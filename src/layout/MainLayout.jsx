
// MainLayout.js
import { Outlet } from "react-router-dom";

// Minimal shell so the exam page controls its full layout.
const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-white">
      <Outlet />
    </div>
  );
};

export default MainLayout;
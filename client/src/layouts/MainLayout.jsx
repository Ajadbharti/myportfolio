import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WelcomeBot from "../components/common/WelcomeBot";
import LiquidCursor from "../components/common/LiquidCursor";

function MainLayout() {
  return (
    <>
      <LiquidCursor />

      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />

      <WelcomeBot />
    </>
  );
}

export default MainLayout;
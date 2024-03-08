import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import ConnectWallet from './Pages/ConnectWallet/ConnectWallet';
import generalRoutes from './Layout/Routes/GeneralRutes';
import dashboardRoutes from './Layout/Routes/DashboardRoutes';
import DashboardLayout from './Layout/DashboardLayout';

function App() {
  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return (
    <main>
      <Router>
        <Routes>
          {generalRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
          {dashboardRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<DashboardLayout>{route.element}</DashboardLayout>}
            />
          ))}
        </Routes>
      </Router>
    </main>
  );
}

export default App;

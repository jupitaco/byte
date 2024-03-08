import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import ConnectWallet from './Pages/ConnectWallet/ConnectWallet';

function App() {
  // AOS animation
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/connect-wallet' element={<ConnectWallet />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

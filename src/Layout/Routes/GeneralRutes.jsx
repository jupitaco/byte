// generalRoutes.js

import ConnectWallet from '../../Pages/ConnectWallet/ConnectWallet';
import Home from '../../Pages/Home/Home';

const generalRoutes = [
  { path: '/', element: <Home /> },
  { path: '/connect-wallet', element: <ConnectWallet /> },
];

export default generalRoutes;

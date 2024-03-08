import { CreateLock } from '../../Pages/CreateLock/CreateLock';
import Home from '../../Pages/Home/Home';
import Launchpad from '../../Pages/Launchpad/Launchpad';
import Token from '../../Pages/Token/Token';

const dashboardRoutes = [
  { path: '/home', name: 'Dashboard', element: <Home /> },
  { path: '/job', name: 'Launchpad', element: <Launchpad /> },
  { path: '/createlock', name: 'Create Lock', element: <CreateLock /> },
  { path: '/token', name: 'Token', element: <Token /> },
];

export default dashboardRoutes;

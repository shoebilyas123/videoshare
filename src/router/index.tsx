import { createBrowserRouter } from 'react-router-dom';
import Auth from '~/pages/auth';
import Calls from '~/pages/calls';
import Home from '~/pages/home';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'calls',
    element: <Calls />,
  },
]);

export default router;

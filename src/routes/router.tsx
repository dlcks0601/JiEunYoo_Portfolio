import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import Menu from '@/pages/Menu';
import Layout from '@/layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
    ],
  },
]);

export default router;

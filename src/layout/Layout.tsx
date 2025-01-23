import Header from '@/components/Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className='flex w-full justify-center min-h-screen'>
      <div className='flex w-full flex-col p-[10px] max-w-screen-sm gap-[50px]'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

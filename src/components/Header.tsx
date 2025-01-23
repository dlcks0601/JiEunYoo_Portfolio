import { useNavigate } from 'react-router';
import MenuIcon from './MenuIcon';
import CloseIcon from './CloseIcon';

const Header = () => {
  const dynamicSize = 'calc(12px + 4vw)';
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleCloseClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className='flex w-full justify-between items-center'>
        <div
          className='flex font-semibold'
          style={{
            fontSize: 'calc(50% + 7vw)',
          }}
        >
          jieun yoo
        </div>
        <div className='flex'>
          {location.pathname === '/menu' ? (
            <button onClick={handleCloseClick}>
              <CloseIcon size={dynamicSize} />
            </button>
          ) : (
            <button onClick={handleMenuClick}>
              <MenuIcon size={dynamicSize} />
            </button>
          )}
        </div>
      </div>
      {/* <div
        className='flex w-full'
        style={{
          boxShadow: '0 0 0 0.5px black',
        }}
      ></div> */}
    </>
  );
};

export default Header;

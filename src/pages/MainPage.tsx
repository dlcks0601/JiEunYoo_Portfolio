import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const MainPage = () => {
  return (
    <div className='flex w-full justify-center min-h-screen'>
      <div className='flex w-full flex-col p-[10px] max-w-screen-sm gap-[10px]'>
        <div className='flex w-full justify-between items-center'>
          <div className='flex text-[40px]'>JIEUN YOO</div>
          <div className='flex'>
            <MenuOutlinedIcon
              fontSize='inherit'
              style={{ fontSize: '48px' }}
              className='text-black'
            />
          </div>
        </div>
        <div className='flex w-full border border-black border-[1.5px]'></div>
      </div>
    </div>
  );
};

export default MainPage;

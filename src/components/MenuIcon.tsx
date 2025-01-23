const MenuIcon = ({
  size = 'calc(12px + 2vw)',
}: {
  size?: string | number;
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 26 26'
      width={size}
      height={size}
    >
      <path d='M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z'></path>
    </svg>
  );
};

export default MenuIcon;

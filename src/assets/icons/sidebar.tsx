const SidebarIcon = ({
  color,
  h,
  w,
}: {
  color?: string;
  h?: string;
  w?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : "1em"}
      height={h ? h : "1em"}
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={color ? color : "currentColor"}
        d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"
      />
    </svg>
  );
};

export default SidebarIcon;

const LoaderIcon = ({
  color,
  w,
  h,
}: {
  color?: string;
  w?: string;
  h?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : "1em"}
      height={h ? h : "1em"}
      viewBox="0 0 24 24"
      className="animate-spin"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="none"
        stroke={color ? color : "currentColor"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3a9 9 0 1 0 9 9"
      />
    </svg>
  );
};

export default LoaderIcon;

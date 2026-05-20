const CancelIcon = ({
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
      viewBox="0 0 512 512"
    >
      <path d="M0 0h512v512H0z" fill="none" />
      <path
        fill={color ? color : "currentColor"}
        fill-rule="evenodd"
        d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"
      />
    </svg>
  );
};

export default CancelIcon;

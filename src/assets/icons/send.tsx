const SendIcon = ({
  color,
  w,
  h,
  style=''
}: {
  color?: string;
  w?: string;
  h?: string;
  style?:string
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : "1em"}
      height={h ? h : "1em"}
      viewBox="0 0 24 24"
      className={style}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={color ? color : "currentColor"}
        d="M24.003 12L.292 1.665L3.587 11H11v2H3.587L.292 22.336z"
      />
    </svg>
  );
};

export default SendIcon;

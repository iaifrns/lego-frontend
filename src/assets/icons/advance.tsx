const AdvanceIcon = ({
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
      viewBox="0 0 32 32"
    >
      <path d="M0 0h32v32H0z" fill="none" />
      <path
        fill={color ? color : "currentColor"}
        d="M2.909 26.182h1.939v4.848H2.909z"
        className="ouiIcon__fillSecondary"
      />
      <path
        fill={color ? color : "currentColor"}
        d="M4.848 16.62V0H2.91v16.62a3.879 3.879 0 1 0 1.94 0m-.97 5.683a1.94 1.94 0 1 1 0-3.879a1.94 1.94 0 0 1 0 3.879"
      />
      <path
        fill={color ? color : "currentColor"}
        d="M14.545 16.485h1.939V31.03h-1.939z"
        className="ouiIcon__fillSecondary"
      />
      <path
        fill={color ? color : "currentColor"}
        d="M16.485 6.924V0h-1.94v6.924a3.879 3.879 0 1 0 1.94 0m-.97 5.682a1.94 1.94 0 1 1 0-3.879a1.94 1.94 0 0 1 0 3.88"
      />
      <path
        fill={color ? color : "currentColor"}
        d="M26.182 26.182h1.939v4.848h-1.939z"
        className="ouiIcon__fillSecondary"
      />
      <path
        fill={color ? color : "currentColor"}
        d="M28.121 16.62V0h-1.94v16.62a3.879 3.879 0 1 0 1.94 0m-.97 5.683a1.94 1.94 0 1 1 0-3.879a1.94 1.94 0 0 1 0 3.879"
      />
    </svg>
  );
};

export default AdvanceIcon;

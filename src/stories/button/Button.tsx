interface ButtonProps {
  label: string;
  backgroundColor: string;
  border?: boolean;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  className?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {
    label,
    backgroundColor,
    border,
    borderColor,
    borderWidth,
    borderRadius,
    className,
    ...rest
  } = props;
  return (
    <button
      type="button"
      className={`text-white font-bold py-2 px-4 ${className}`}
      style={{
        backgroundColor: backgroundColor,
        ...(border && {
          borderColor: borderColor,
          borderWidth: borderWidth,
        }),
        // set the min value for borderRadius to be 12
        borderRadius: borderRadius ? Math.max(12, borderRadius) : 12,
      }}
      {...rest}
    >
      {label}
    </button>
  );
};

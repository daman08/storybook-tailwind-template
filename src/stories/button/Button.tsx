interface ButtonProps {
  label?: string;
  backgroundColor?: string;
  outline?: boolean;
  outlineColor?: string;
  outlineWidth?: number;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const {
    label,
    backgroundColor,
    outline,
    outlineColor,
    outlineWidth,
    ...rest
  } = props;
  return (
    <button
      type="button"
      className={`text-white font-bold py-2 px-4 rounded-lg`}
      style={{
        backgroundColor: backgroundColor,
        ...(outline && {
          borderColor: outlineColor,
          borderWidth: outlineWidth,
        }),
      }}
    >
      {label}
    </button>
  );
};

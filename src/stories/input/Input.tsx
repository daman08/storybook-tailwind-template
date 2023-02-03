interface InputProps {
  label?: string;
  placeholder: string;
  border?: boolean;
  value?: string;
  onChange?: () => void;
  backgroundColor?: string;
}

export const Input = (props: InputProps) => {
  const {
    label,
    placeholder,
    border,
    value,
    onChange,
    backgroundColor,
    ...rest
  } = props;
  return (
    <div>
      {label && <label className="p-1">{label}</label>}
      <input
        className={`p-2 rounded-lg`}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          ...(border && { border: "1px solid #ccc" }),
          backgroundColor: backgroundColor,
        }}
        {...rest}
      />
    </div>
  );
};

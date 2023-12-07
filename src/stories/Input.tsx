import './input.css';

interface InputProps {
    label: string;
    readonly?: boolean;
    placeholder?: string;
}

export const Input = ({
    label,
    readonly = false,
    placeholder,
    ...props
  }: InputProps) => {
    return (
    <>
    <label>
        {label}
    </label>
    <input
        readOnly={readonly}
        className="input-test"
        {...props}
        placeholder={(placeholder != "" )? placeholder : ""}
      />
    </>

    );
  };
interface props {
  value?: string;
  width?: string;
  isVisible?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
}

const Input = ({ value, placeholder, type, onChange, className }: props) => {
  return (
    <input
      className={` mt-1 border-b-1 border-slate-50 focus:border-blue-500 outline-none w-full ${
        className ? className : ''
      }`}
      type={`${type ? type : 'text'}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

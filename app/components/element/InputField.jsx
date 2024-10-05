// components/forms/InputField.jsx
const InputField = ({ name, type, value, onChange, placeholder, label, labelClass }) => {
  return (
    <div>
        <label htmlFor={name} className={`font-medium text-[15px] mb-1 block ${labelClass}`}>{label}</label>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-label={placeholder}
          className="border border-gray-300 rounded-md p-2 w-full "
        />
    </div>
  );
};

export default InputField;

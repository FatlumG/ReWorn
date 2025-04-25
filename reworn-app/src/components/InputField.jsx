import React from "react";

function Input({
  parentClass,
  htmlFor,
  label,
  labelClass,
  id,
  inputClass,
  value,
  inputType,
  placeholder,
  child,
  onChange,
}) {
  return (
    <div className={parentClass}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          id={id}
          className={inputClass}
          value={value}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
        >
          {/* {value} */}
        </input>
        {child}
      </div>
    </div>
  );
}

export default Input;

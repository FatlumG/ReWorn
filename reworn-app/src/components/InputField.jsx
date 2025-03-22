import React from "react";

function Input({
  parentClass,
  htmlFor,
  label,
  labelClass,
  id,
  inputClass,
  input,
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
          value={input}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
        >
          {input}
        </input>
        {child}
      </div>
    </div>
  );
}

export default Input;

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
        >
          {input}
        </input>
        {child}
      </div>
    </div>
  );
}

export default Input;

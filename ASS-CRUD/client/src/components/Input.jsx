import React from 'react';

const Input = ({ label, icon, value, ...rest}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="name"
        >
          {label}*
        </label>
      )}
      <input
        {...rest}
        value={value}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

      />
    </div>
  );
};

export default Input;

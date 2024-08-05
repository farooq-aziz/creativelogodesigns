"use client"
// Hooks
import { useId } from "react";

const Input = ({
    type = "text",
    name,
    value,
    placeholder,
    disabled = false,
    handle,
    label,
    css,
    height = "h-[40px]",
    bg = "bg-transparent",
    color = "text-white",
    border = "border-b-2",
    padding = "px-1",
    placeholderColor = "placeholder:text-gray-500"
}) => {
    const referenceID = useId();
    return (
        <div className="relative">
            {label && <label
                htmlFor={referenceID}
            >
                {label}
            </label>}
            <input
                autoComplete="off"
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                id={referenceID}
                onChange={handle}
                className={`focus-visible:outline-none w-full ${padding} ${border} text-[15px] ${placeholderColor} ${bg} ${color} font-medium ${height} ${css}`}
            />
        </div>
    )
}

export default Input;
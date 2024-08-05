// Hooks
import { useId } from "react";

const Textarea = ({
    name,
    value,
    placeholder,
    handle,
    label,
    css,
    height = "h-[100px]",
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
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                id={referenceID}
                onChange={handle}
                className={`focus-visible:outline-none resize-none w-full ${padding} ${border} text-[15px] ${placeholderColor} ${bg} ${color} font-medium ${height} ${css}`}
            ></textarea>
        </div >
    )
}

export default Textarea;
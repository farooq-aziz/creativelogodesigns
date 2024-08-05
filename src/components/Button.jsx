import Image from "next/image";

const Button = ({
    handle,
    text,
    width = "w-full",
    height = "h-[41px]",
    bg = "bg-white",
    color = "text-white",
    border = "border-2",
    css,
    disabled = false,
    rounded = "rounded-full",
    fontWeight = "font-extrabold",
    icon,
    iconWidth = 15,
    iconHeight = 19,
    id=""
}) => {
    return (
        <button
            type="button"
            onClick={handle}
            disabled={disabled}
            className={`flex items-center gap-3 justify-center text-[18px] font-megat ${fontWeight} ${rounded} ${color} ${border} transition-all ${bg} ${height} ${width} ${css}`}
            id={id}
        >
            {icon && <Image src={icon} width={iconWidth} height={iconHeight} alt="icon" />}
            {text}
        </button>
    )
}

export default Button;
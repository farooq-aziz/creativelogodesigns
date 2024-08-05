const CTA = ({ text, href, color = "text-white", bg = "bg-red", css, icon, iconWidth = 22, iconHeight = 28, rounded = "rounded-full", width = "sm:w-[205px]", widthWrapper = "w-full sm:w-max", height = "h-[45px]", iconCss = "" }) => {
    return (
        <>
            {icon ? <div className={`${widthWrapper}`} dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center gap-3 ${width} justify-center ${height} ${color} ${bg} text-[18px] font-medium ${rounded} ${css} transition-all" >
                    <span className="text-sm xl:text-lg font-medium">${text ?? "Book Demo"}</span>
                    <img src="${icon}" width="${iconWidth}" height="${iconHeight}" class="${iconCss}" alt="creativelogodesigns.io" />
                </a>`
            }} /> : <div className={`${widthWrapper}`} dangerouslySetInnerHTML={{
                __html: `<a href=${href} class="flex items-center gap-3 ${width} justify-center ${height} ${color} ${bg} text-[18px] font-medium ${rounded} ${css} transition-all" >
                    <span className="text-sm xl:text-lg font-medium">${text ?? "Book Demo"}</span>
                </a>`
            }} />}
        </>
    )
}

export default CTA;
import React from 'react'

const Button = (props) => {
    const { label, iconUrl, backgroundColor, textColor, borderColor, fullWith } = props

    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat tex-lg leading-none   
        ${backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}  hover:bg-gray-200`
                : "bg-coral-red text-white border-coral-red"
            } rounded-full ${fullWith && 'w-full'}
        `}>
            {label}
            {
                iconUrl && <img src={iconUrl}
                    alt="arrow right icon"
                    className="ml-2 rounded-full w-5 h-5"

                />
            }

        </button >
    )
}

export default Button
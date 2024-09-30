import React from 'react'
import { IButton } from './IButton'

const Button = (props: IButton) => {
    const { text, onClick, className } = props
    return (
        <div onClick={onClick} className={className + ' cursor-pointer w-[55%] text-xl font-semibold px-3 py-4 bg-pink text-center rounded-xl'}>
            {text}
        </div>
    )
}

export default Button
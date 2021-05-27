import React from 'react'
import './button.css'

export default function Button({children}) {
    return (
        <div className='button'>
            {children}
        </div>
    )
}

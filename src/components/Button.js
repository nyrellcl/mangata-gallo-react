import React from 'react'
import './Buttons/Button.css'

const STYLE = ['btn-primary', 'btn-secondary', 'btn-tertiary', 'btn-collection']

const SIZE = ['btn-normal', 'btn-submit']

const COLOR = ['main-btn-color']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}
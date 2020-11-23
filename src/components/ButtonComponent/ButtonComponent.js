import React from 'react'
import './ButtonComponent.css'

export default function ButtonComponent(props) {

    ButtonComponent.defaultProps = {
        tag: 'a',
    }
    const { tag, className, childrenm, ...otherProps } = props

    return React.createElement(
        props.tag,
        {
            className: ['ButtonComponent', props.className].join(' '),
            ...otherProps
        },
        props.children
    )
}


import React from 'react';
import BaseProps from "./BaseProps"


export const Base = (props: BaseProps.BaseProps & any) => {
    const {
        width = 40,
        height = 40,
        viewBox = '0 0 40 40',
        fill: fill,
        stroke: stroke,
        ...rest
    } = props;

    return (
        <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            {rest.children}
        </svg>
    )
}
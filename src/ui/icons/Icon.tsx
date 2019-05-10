import * as React from 'react';
import { BaseProps } from './BaseProps';
import { IconConfig } from './IconConfig'
import { Path } from "./Path"
import { Polygon } from "./Polygon"

export type IconProps = BaseProps & {
    name: string
}

export const Icon = (props: IconProps) => {
    const {
        name: name,
        width: width,
        height: height,
        viewBox: viewBox,
        fill: fill,
        stroke: stroke,
        ref: ref,
        ...rest
    } = props;

    const iconConfig = IconConfig[name.toLowerCase()]

    return (
        <div>
            {iconConfig.type == 'path' ?
                <Path d={iconConfig.d} width={width} height={height} viewBox={viewBox || iconConfig.viewBox} fill={fill} stroke={stroke} ref={ref} {...rest}></Path> :
                <Polygon d={iconConfig.d} width={width} height={height} viewBox={viewBox || iconConfig.viewBox} fill={fill} stroke={stroke} ref={ref} {...rest}></Polygon>
            }
        </div>
    )
}
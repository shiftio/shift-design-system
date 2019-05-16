import * as React from 'react';
import { BaseProps } from './BaseProps';
import { IconConfig } from './IconConfig'
import { Path } from "./Path"
import { Polygon } from "./Polygon"
import { Theme } from "../theme"

export type IconProps = BaseProps & {
    name: string;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    fill?: "brand" | "black" | "white" | "neutral-primary" | "neutral-secondary";
    stroke?: "brand" | "black" | "white" | "neutral-primary" | "neutral-secondary";
}

export const Icon = (props: IconProps) => {
    const {
        name: name,
        xs: xs,
        sm: sm,
        md: md,
        lg: lg,
        xl: xl,
        fill: fill,
        stroke: stroke,
        ref: ref,
        ...rest
    } = props;

    const iconConfig = IconConfig[name.toLowerCase()]

    const getSize = () => {
        if(xs) return Theme.icons.size.xs;
        if(sm) return Theme.icons.size.sm;
        if(md) return Theme.icons.size.md;
        if(lg) return Theme.icons.size.lg;
        if(xl) return Theme.icons.size.xl;

        return Theme.icons.size.md;
    }

    const getFill = () => {
        return getColor(fill)
    }

    const getStroke = () => {
        return getColor(stroke)
    }

    const getColor = (propColor : string | undefined) => {
        if(propColor === "brand") return Theme.colors.brand;
        if(propColor === "black") return Theme.colors.black;
        if(propColor === "white") return Theme.colors.white;
        if(propColor === "neutral-primary") return Theme.colors.neutral.primary;
        if(propColor === "neutral-secondary") return Theme.colors.neutral.secondary;

        return Theme.colors.neutral.secondary;
    }

    const size = getSize();
    const fillColor = getFill();
    const strokeColor = getStroke();

    return (
        <div style={{margin: "auto"}}>
            {iconConfig.type == 'path' ?
                <Path d={iconConfig.d} width={size} height={size} viewBox={iconConfig.viewBox} fill={fillColor} stroke={strokeColor} ref={ref} {...rest}></Path> :
                <Polygon d={iconConfig.d} width={size} height={size} viewBox={iconConfig.viewBox} fill={fillColor} stroke={strokeColor} ref={ref} {...rest}></Polygon>
            }
        </div>
    )
}
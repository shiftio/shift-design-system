import * as React from 'react';
import { Base } from './Base';
import { BaseProps } from './BaseProps';

export type PolygonProps = BaseProps & {
  d: string
}

export const Polygon = (props: PolygonProps) => {
  const {
      d: d,
      width: width,
      height: height,
      viewBox: viewBox,
      fill: fill,
      stroke: stroke,
      ref: ref,
      ...rest
  } = props;

  return (
  <Base width={width} height={height} viewBox={viewBox} {...rest}>
    <g fill={fill} stroke={stroke}>
      <polygon points={d} />
    </g>
  </Base>
  )
}


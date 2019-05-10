import * as React from 'react';
import { Base } from './Base';
import { BaseProps } from './BaseProps';

export type PathProps = BaseProps & {
  d: string
}

export const Path = (props: PathProps) => {
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
      <path d={d} />
    </g>
  </Base>
  )
}


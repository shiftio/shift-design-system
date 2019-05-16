import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme";

type BoxProps = React.HTMLProps<HTMLDivElement> & {
  area?: string,
  display?: 'flex' | 'inline-flex';
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrapItems?: boolean;
  basis?: string;
  grow?: number;
  shrink?: number;
  justifyContent?: 'start' | 'center' | 'end' | 'stretch',
  alignItems?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly',
  // onClick?: React.MouseEventHandler,
  ref?: React.Ref<HTMLElement>;
}

export const Box = (props : BoxProps) => {

  const {
    area: area,
    display: display,
    direction: direction,
    wrapItems: wrapItems,
    basis: basis,
    grow: grow,
    shrink: shrink,
    justifyContent: justifyContent,
    alignItems: alignItems,
    // onClick: onClick,
    ref: ref,
    ...rest
  } = props;

  const getAlignment = () => {
    if(alignItems === "start") return "flex-start"
    if(alignItems === "end") return "flex-end"
    if(alignItems === "around") return "space-around"
    if(alignItems === "between") return "space-between"
    if(alignItems === "evenly") return "space-evenly"

    return alignItems
  }

  const getJustification = () => {
    if(justifyContent === "start") return "flex-start"
    if(justifyContent === "end") return "flex-end"

    return justifyContent
  }

  const Element = ({ className } : any) => (
    <div
      className={className}
      // onClick={onClick}
      {...rest}
    >
      {rest.children}
    </div>
  );

  const BoxElement = styled(Element)`
    area: ${area};
    display: ${display};
    flex-basis: auto;
    flex-wrap: ${wrapItems ? "wrap" : "nowrap"};
    flex-basis: ${basis || "auto"};
    flex-grow: ${grow};
    flex-shrink: ${shrink || 1}
    align-items: ${getAlignment()};
    justify-content: ${getJustification()};
  `

  return <BoxElement/>;
}

Box.defaultProps = {
  display: 'flex',
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  wrap: 'wrap',
  basis: 'auto',
  grow: 1,
  shrink: 1
}
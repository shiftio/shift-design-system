import * as React from "react";
import styled from "@emotion/styled";
// import { Theme } from "../theme/theme";

type GridItemProps = React.HTMLProps<HTMLDivElement> & {
  area: string;
  justifySelf?: 'start' | 'center' | 'end' | 'stretch',
  alignSelf?: 'start' | 'center' | 'end' | 'stretch',
  ref?: React.Ref<HTMLElement>;
}

export const GridItem = (props : GridItemProps & any) => {
  const {
    area: area,
    justifySelf: justifySelf,
    alignSelf: alignSelf,
    ref: ref,
    ...rest
  } = props;

  const Element = ({ className } : any) => (
    <div
      className={className}
      {...rest}
    >
      {rest.children}
    </div>
  );

  const GridItemElement = styled(Element)`
    grid-area: ${area};
    justify-self: ${justifySelf};
    align-self: ${alignSelf};
  `

  return <GridItemElement/>;
}

GridItem.defaultProps = {
  justifySelf: "stretch",
  alignSelf: "stretch"
}
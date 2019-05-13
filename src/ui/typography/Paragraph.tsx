import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../theme";

type ParagraphProps  = React.HTMLProps<HTMLParagraphElement> & {
    align?: "start" | "center" | "end" | "stretch";
    color?: "brand" | "black" | "white" | "neutral-primary" | "neutral-secondary";
    area?: string;
    ref?: React.Ref<HTMLElement>;
}

export const Paragraph = (props: ParagraphProps) => {
  const {
      align: align,
      color: color,
      area: area,
      ref: ref,
      ...rest
  } = props;

  const getColor = () => {
      if(color === "brand") return Theme.colors.brand;
      if(color === "black") return Theme.colors.black;
      if(color === "white") return Theme.colors.white;
      if(color === "neutral-primary") return Theme.colors.neutral.primary;
      if(color === "neutral-secondary") return Theme.colors.neutral.secondary;
  }

  const Element = ({ className } : any) => (
    <p className={className} {...rest}>{rest.children}</p>
  );

  const ParagrpahElement = styled(Element)`
    color: ${getColor()};
    grid-area: ${area};
    font-size: ${Theme.typography.p.fontSize};
    text-align: ${align};
    align-self: ${align};
  `;

  return (<ParagrpahElement/>);
};

Paragraph.defaultProps = {
    align: "center",
    color: "neutral-primary"
}

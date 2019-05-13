import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../theme";

type HeaderProps  = React.HTMLProps<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    align?: "start" | "center" | "end" | "stretch";
    color?: "brand" | "black" | "white" | "neutral-primary" | "neutral-secondary";
    area?: string;
    ref?: React.Ref<HTMLElement>;
}

export const Header = (props: HeaderProps) => {
  const {
      as: as,
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

  const renderHeader = (className : string) => {
    switch (as) {
        case "h1":
            return <h1 className={className} {...rest}>{rest.children}</h1>
        case "h2":
            return <h2 className={className} {...rest}>{rest.children}</h2>
        case "h3":
            return <h3 className={className} {...rest}>{rest.children}</h3>
        case "h4":
            return <h4 className={className} {...rest}>{rest.children}</h4>
        case "h5":
            return <h5 className={className} {...rest}>{rest.children}</h5>
        case "h6":
            return <h6 className={className} {...rest}>{rest.children}</h6>
        default:
            return <h2 className={className} {...rest}>{rest.children}</h2>
    }
  }
  const Element = ({ className } : any) => (
    renderHeader(className)
  );

  const HeaderElement = styled(Element)`
    color: ${getColor()};
    grid-area: ${area};
    font-size: ${Theme.typography[as || 'h3'].fontSize};
    text-align: ${align};
    align-self: ${align};
    margin-top: ${Theme.typography[as || 'h3'].marginTop};
    margin-bottom: ${Theme.typography[as || 'h3'].marginBottom};
  `;

  return (<HeaderElement/>);
};

Header.defaultProps = {
    as: 'h3',
    align: "center",
    color: "neutral-primary"
}

import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/theme";

interface ButtonProps {
  id?: string;
  className?: string;
  type?: "ok" | "warning";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
  ref?: React.Ref<HTMLElement>;
}

export const Button = (props: ButtonProps & any) => {
  const {
    id: id,
    className: className,
    type: type,
    size: size,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ref: ref,
    ...rest
  } = props;

  console.log("FOOOO", size, Theme.controls.button);

  const Element = ({ className }) => (
    <button
      {...props}
      // type={type}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {rest.children}
    </button>
  );

  const ButtonElement = styled(Element)`
    color: ${Theme.colors.text.dark};
    background-color: ${Theme.colors.status[type]};
    /* height: ${Theme.controls.button[size].height}; */
    width: ${Theme.controls.button[size].width};
    font-size: ${Theme.controls.button[size].fontSize};
    font-weight: ${Theme.controls.button[size].fontWeight};
    pointer-events: ${disabled ? "none" : "auto"};
    opacity: .25; /*${disabled ? 0.25 : 1};
    border-radius: 3px;
    display: inline-block;
    padding: ${Theme.controls.button[size].verticalPadding} ${
    Theme.controls.button[size].horizontalPadding
  };
    margin: 10px;
    box-shadow: none;
    border: none;
    opacity: 1;
    cursor: pointer;
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 300ms;

    &:focus {
      outline: none;
    }
  `;

  return <ButtonElement className={className} />;
};

Button.defaultProps = {
  type: "ok",
  size: "xs"
};

/* boxShadow: ghost ? `inset 0 0 0 1px ${shadowColor}` : "none", */
/* minWidth: minWidth ? `${minWidth}px` : "none" */

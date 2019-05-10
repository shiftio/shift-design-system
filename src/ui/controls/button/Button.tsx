import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/theme";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  ok?: boolean;
  warning?: boolean;
  outline?: boolean;
  ref?: React.Ref<HTMLElement>;
}

const Button = (props: ButtonProps) => {

  const {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    ok: ok,
    warning: warning,
    type: type,
    size: size,
    outline: outline,
    ref: ref,
    ...rest
  } = props;

  const Element = ({ className } : any) => (
    <button
      className={className}
      {...rest}
    >
      {rest.children}
    </button>
  );

  const getButtonSize = () => {
    if(xs) return Theme.controls.button.xs;
    if(sm) return Theme.controls.button.sm;
    if(md) return Theme.controls.button.md;
    if(lg) return Theme.controls.button.lg;
    if(xl) return Theme.controls.button.xl;
  }

  const buttonType = warning ? Theme.colors.status.warning : Theme.colors.status.ok;
  const buttonSize = getButtonSize()

  const ButtonElement = styled(Element)`
    box-shadow: none;
    box-sizing: border-box;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 300ms;
    color: ${outline ? buttonType :  Theme.colors.text.dark};
    background-color: ${outline ? "none" : buttonType};
    width: ${buttonSize.width};
    font-size: ${buttonSize.fontSize};
    font-weight: ${buttonSize.fontWeight};
    pointer-events: auto;
    border-radius: ${Theme.controls.button.borderRadius};
    border: 2px solid ${outline ? buttonType : "none"};
    padding: ${buttonSize.verticalPadding} ${buttonSize.horizontalPadding};
    :disabled {
      pointer-events: none;
      opacity: 0.25
    }
  `;

  return <ButtonElement/>;
};

Button.defaultProps = {
  ok: true,
  xs: true
};

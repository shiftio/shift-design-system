import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Icon } from "../../icons"
import { Theme } from "../../theme";

type ModalProps = React.HTMLProps<HTMLDivElement> &  {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  onOpen?: Function;
  onClose?: Function;
  closeOnBlur?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export const Modal = (props : ModalProps) => {

  const {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    onClose: onClose,
    closeOnBlur: closeOnBlur,
    ref: ref,
    ...rest
  } = props;

  const getSize = () => {
    if(xs) return Theme.layouts.modal.size.xs;
    if(sm) return Theme.layouts.modal.size.sm;
    if(md) return Theme.layouts.modal.size.md;
    if(lg) return Theme.layouts.modal.size.lg;
    if(xl) return Theme.layouts.modal.size.xl;

    return Theme.layouts.modal.size.md;
  }

  const size = getSize()

  const onBlurHandler = () => {
    if(closeOnBlur && onClose) onClose()
  }

  const onCloseHandler = () => {
    if(onClose) onClose()
  }

  const Element = ({ className } : any) => (
      <div onClick={onBlurHandler} className={className} {...rest}>
        <div>
          <div onClick={onCloseHandler} style={{position: "absolute", top: "10px", right: "10px", cursor: "pointer"}}>
            <Icon name="close" width={10} height={10}></Icon>
          </div>
          {rest.children}
        </div>
      </div>
  );

  const ModalElement = styled(Element)`
    position: fixed;
    background-color: rgba(255, 255, 255, 0.25);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    pointer-events: auto;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    &>div {
      height: ${size.height};
      width: ${size.width};
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1em;
      background: #ffffff;
    }
  `

  return <ModalElement />;
}
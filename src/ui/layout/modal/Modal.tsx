import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme";

type ModalProps = React.HTMLProps<HTMLDivElement> &  {
  ref?: React.Ref<HTMLElement>;
}

export const Modal = (props : ModalProps) => {
  const {
    ref: ref,
    ...rest
  } = props;

  const Element = ({ className } : any) => (
      <div className={className} {...rest}>
        <div>
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
    pointer-events: none;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    &:target {
      opacity: 1;
      pointer-events: auto;
    }
    &>div {
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: #ffffff;
    }
  `

  return <ModalElement />;
}

Modal.defaultProps = {

}
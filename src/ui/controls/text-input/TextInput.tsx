import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/theme";

type TextInputProps = React.HTMLProps<HTMLInputElement> & {
  ref?: React.Ref<HTMLElement>;
}

export const TextInput = (props: TextInputProps) => {
  const {
    ref: ref,
    ...rest
  } = props;

  const InputElement = ({ className } : any) => (
    <input
      className={className}
      ref={ref}
      {...rest}
    />
  );

  const Input = styled(InputElement)`
    display: inline-block;
    box-sizing: border-box;
    appearance: none;
    box-shadow: none;
    height: 100%;
    width: 100%;
    margin: 0;
    color: ${Theme.colors.text.light};
    border: ${Theme.controls.textInput.borderWidth} solid
      ${Theme.colors.controls.border};
    border-radius: ${Theme.controls.textInput.borderRadius};
    padding: ${Theme.controls.textInput.padding};
    ::placeholder {
      color: ${Theme.colors.controls.placeHolder};
    }
    &:focus {
      outline: none;
      border-color: ${Theme.colors.brand};
    }
  `;

  return <Input/>;
};

import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/theme";

interface TextInputProps {
  id?: string;
  className?: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  ref?: React.Ref<HTMLElement>;
}

export const TextInput = (props: TextInputProps & any) => {
  const {
    id: id,
    className: className,
    placeholder: placeholder,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    ref: ref,
    ...rest
  } = props;

  const InputElement = ({ className }) => (
    <input
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
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

  return <Input className={className} />;
};

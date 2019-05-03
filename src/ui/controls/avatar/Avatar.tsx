import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/theme";

interface AvatarProps {
  id?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  source: string;
  initials?: string;
  onClick?: React.MouseEventHandler;
  ref?: React.Ref<HTMLElement>;
}

export const Avatar = (props: AvatarProps & any) => {
  const {
    id: id,
    className: className,
    size: size,
    source: source,
    initials: initials,
    onClick: onClick,
    ref: ref,
    ...rest
  } = props;

  const Element = ({ className }) => (
    <div id={id} className={className} onClick={onClick} ref={ref} {...rest}>
      {source ? (
        <img
          alt=""
          style={{
            height: Theme.media.avatar.size[size],
            width: Theme.media.avatar.size[size]
          }}
          src={source}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );

  const AvatarElement = styled(Element)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    transition: transform cubic-bezier(0.4, 0, 0.2, 1) 300ms;
    box-sizing: border-box;
    color: ${Theme.colors.text.dark};
    background-color: ${Theme.media.avatar.backgroundColor};
    height: ${Theme.media.avatar.size[size]};
    width: ${Theme.media.avatar.size[size]};
    font-size: ${Theme.media.avatar.size[size] * 0.4};
    border: ${Theme.media.avatar.borderWidth} solid
      ${Theme.media.avatar.borderColor};
  `;

  return (
    <div>
      <AvatarElement className={className} />
    </div>
  );
};

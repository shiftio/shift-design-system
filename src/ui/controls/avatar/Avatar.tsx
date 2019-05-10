import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/theme";

type AvatarProps  = React.HTMLProps<HTMLDivElement> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  source: string;
  initials?: string;
  ref?: React.Ref<HTMLElement>;
}

export const Avatar = (props: AvatarProps) => {
  const {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    source: source,
    initials: initials,
    ref: ref,
    ...rest
  } = props;

  const getSize = () => {
    if(xs) return Theme.media.avatar.size.xs;
    if(sm) return Theme.media.avatar.size.sm;
    if(md) return Theme.media.avatar.size.md;
    if(lg) return Theme.media.avatar.size.lg;
    if(xl) return Theme.media.avatar.size.xl;
  }

  const Element = ({ className } : any) => (
    <div className={className} ref={ref} {...rest}>
      {source ? (
        <img
          alt=""
          style={{
            height: getSize(),
            width: getSize()
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
      <AvatarElement/>
    </div>
  );
};

Avatar.defaultProps = {
  sm: true
}

import * as React from "react";
import { Box } from "../../layout/box"
import { Theme } from "../../theme/theme";

export type TabProps = React.HTMLProps<HTMLDivElement> & {
    active?: boolean;
    xs?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    auto?: boolean;
    fill?: boolean
  ref?: React.Ref<HTMLElement>;
}

export const Tab = (props: TabProps) => {

  const {
    active: active,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    auto,
    fill: fill,
    ref: ref,
    ...rest
  } = props;

  const getSize = () => {
    if(xs) return Theme.controls.tab.xs.width;
    if(sm) return Theme.controls.tab.sm.width;
    if(md) return Theme.controls.tab.md.width;
    if(lg) return Theme.controls.tab.lg.width;
    if(xl) return Theme.controls.tab.xl.width;

    return Theme.controls.tab.sm.width;
  }

  const style = {
    boxSizing: "border-box",
    padding: "0 1rem 0 1rem",
    cursor: "pointer",
    borderBottom: active ? `0.20rem solid ${Theme.colors.brand}` : `0.05rem solid ${Theme.colors.neutral.secondary}`,
    paddingTop: active ? "0.15rem" : 0
  } as React.CSSProperties;

  // @ts-ignore
  if(!auto) style.width = getSize()

  return (<Box
    style={style}
    wrapItems={false}
    alignItems="center"
    justifyContent="center"
    grow={fill ? 1 : 0}
    {...rest}>
    {rest.children}
  </Box>)
};

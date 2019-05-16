import * as React from "react";
import styled from "@emotion/styled";
import { Box } from "../../layout/box"
import { Theme } from "../../theme/theme";

export type TabsProps = React.HTMLProps<HTMLElement> & {
  align?: 'start' | 'center' | 'end',
  ref?: React.Ref<HTMLElement>;
}

export const Tabs = (props: TabsProps) => {

  const {
    align: align,
    ref: ref,
    ...rest
  } = props;

  return (
    <Box
      justifyContent={align}>
      {rest.children}
    </Box>
  );
};

Tabs.defaultProps = {
  align: "start"
}

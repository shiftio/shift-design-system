import * as React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme";

interface GridArea {
  name: string;
  start: Array<number>,
  end: Array<number>
}

type GridProps = React.HTMLProps<HTMLDivElement> & {
  display?: 'inline' | 'grid';
  columns: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> | string | number;
  rows: Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> | string | number;
  areas: Array<GridArea>;
  gap?: string;
  justifyItems?: 'start' | 'center' | 'end' | 'stretch',
  alignItems?: 'start' | 'center' | 'end' | 'stretch',
  ref?: React.Ref<HTMLElement>;
}

export const Grid = (props : GridProps) => {
  const {
    display: display,
    columns: columns,
    rows: rows,
    areas: areas,
    gap: gap,
    justifyItems: justifyItems,
    alignItems: alignItems,
    ref: ref,
    ...rest
  } = props;

  /**
   * Creates a valid CSS grid (grid-template-areas) value from the columns and rows props
   */
  const transpileAreasToCSS = () => {
    const virtualGrid = Array(calculateTrackLength(columns)).fill('.').map(()=>Array(calculateTrackLength(rows)).fill('.'))

    areas.map((area : GridArea) => {
      for(let currentY = area.start[1]; currentY <= area.end[1]; currentY++) {
        for(let currentX = area.start[0]; currentX <= area.end[0]; currentX++) {
          virtualGrid[currentY][currentX] = area.name
        }
      }
    });

    let cssString = ""

    virtualGrid.map((gridRow : Array<string>) => {
      cssString += `"${gridRow.join(" ")}" `
    })

    return cssString;
  }

  const calculateTrackLength = (track : Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> | string | number) => {
    if(typeof track === "number") return track;
    if(typeof track === "string") return track.split(" ").length;

    return track.length;
  }

  const parseTrackSize = (track : Array<'xs' | 'sm' | 'md' | 'lg' | 'xl'> | string | number) => {
    if(typeof track === "string") return track;
    if(typeof track === "number") return `repeat(${track}, 1fr)`

    return track.map((trackSize : string) => Theme.layouts.grid.column.size[trackSize]).join(" ");
  }

  const Element = ({ className } : any) => (
    <div

      className={className}
      {...rest}
    >
      {rest.children}
    </div>
  );



  const GridElement = styled(Element)`
    display: ${display};
    grid-template-columns:  ${parseTrackSize(columns)};
    grid-template-rows: ${parseTrackSize(rows)};
    justify-items: ${justifyItems};
    align-items: ${alignItems};
    grid-gap: ${gap};
    ${areas ? `grid-template-areas: ${transpileAreasToCSS()}` : ''};
  `

  return <GridElement/>;
}

Grid.defaultProps = {
  display: 'grid',
  columns: ['md'],
  rows: ['md'],
  areas: [{name: "default", start: {x: 0, y:0}, end: {x:1, y: 1}}],
  gap: 'none',
  justifyItems: 'stretch',
  alignItems: 'stretch'
}
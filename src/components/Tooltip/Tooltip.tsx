import React from 'react';
import { clsxm } from "../../common/clsxm";
import { DivProps } from 'react-html-props'
import { Tooltip as ReactTooltip } from 'react-tooltip'

type TooltipProps = {
  place?: 'top' | 'right' | 'bottom' | 'left';
  TooltipComponent: any;
  tooltipId: string;
  tooltipContent: string;
} & DivProps

export const Tooltip = (props: TooltipProps) => {
  const {
    TooltipComponent,
    className = '',
    place = 'bottom',
    tooltipContent,
    tooltipId,
    ...rest
  } = props

  return (
    <>
      <TooltipComponent data-tooltip-id={tooltipId} data-tooltip-content={tooltipContent}>text</TooltipComponent>
      <ReactTooltip id={tooltipId} className={clsxm("max-w-[25%]", className)} place={place} />
    </>
  )
}

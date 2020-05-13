import React, { ReactNode, Children } from 'react'
import { Box, BoxProps } from '../Box'

export interface InlineProps extends BoxProps {
  spacing?: string | number
  /**
   * The distribution of the inline item. Similar to `justify-content`
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  children: ReactNode
}

export const Inline = ({
  spacing = 2,
  justify = 'flex-start',
  children,
  ...rest
}: InlineProps) => {
  return (
    <Box mt={-spacing} {...rest}>
      <Box
        flexDirection="row"
        justifyContent={justify}
        ml={-spacing}
        flexWrap="wrap"
      >
        {Children.map(children, (child) =>
          child !== null && child !== undefined ? (
            <Box paddingLeft={spacing} paddingTop={spacing}>
              {child}
            </Box>
          ) : null
        )}
      </Box>
    </Box>
  )
}

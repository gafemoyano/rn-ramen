import React, { Children, isValidElement } from 'react'
import { Box, BoxProps } from '../Box'
import * as StyledSystem from 'styled-system'

interface Stack {
  /**
   * The direction to stack the items.
   */
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  /**
   * The content of the stack.
   */
  children?: React.ReactNode
  /**
   * The space between each stack item
   */
  spacing?: StyledSystem.MarginProps['margin']
  /**
   * The alignment of the stack item. Similar to `align-items`
   */
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  /**
   * The distribution of the stack item. Similar to `justify-content`
   */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

export type StackProps = Stack & BoxProps

export function Stack({
  direction,
  children,
  align,
  justify,
  spacing = 2,
  ...rest
}: StackProps) {
  const validChildrenArray = Children.toArray(children).filter(isValidElement)

  return (
    <Box
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      {...rest}
    >
      {validChildrenArray.map((child, index) => {
        const isLastChild = validChildrenArray.length === index + 1

        return (
          <Box key={index} mb={isLastChild ? undefined : spacing}>
            {child}
          </Box>
        )
      })}
    </Box>
  )
}

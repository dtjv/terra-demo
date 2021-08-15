import {
  Text,
  Box,
  Flex,
  Spacer,
  GridItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { isMultipleOf } from '@/lib/utils'
import { CellKind } from '@/types/enums'
import type { Cell } from '@/types/types'

export interface ScheduleRowHeaderProps {
  cell: Cell
  numRows: number
  timeBlockInMinutes: number
}

export const ScheduleRowHeader = ({
  cell,
  numRows,
  timeBlockInMinutes,
}: ScheduleRowHeaderProps) => {
  const showLineInGrid = isMultipleOf(cell.rowIdx, 60 / timeBlockInMinutes)
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.400')

  if (cell.kind !== CellKind.ROW_HEADER) return null

  return (
    <GridItem
      position="relative"
      borderRightWidth="1px"
      borderColor={borderColor}
    >
      {showLineInGrid && cell.rowIdx < numRows - 2 && (
        <Flex h="100%">
          <Spacer />
          <Box w="20px" borderBottomWidth="1px" borderColor={borderColor}></Box>
        </Flex>
      )}
      {cell.display && (
        <Box
          position="absolute"
          bg="inherit"
          top="-.6rem"
          right="1rem"
          w="100%"
        >
          <Flex height="auto" direction="column" align="flex-end" mr="10px">
            <Text fontSize="sm" fontWeight="medium">
              {cell.display}
            </Text>
          </Flex>
        </Box>
      )}
    </GridItem>
  )
}

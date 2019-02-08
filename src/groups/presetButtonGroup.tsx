import React from 'react'
import { Flex, Box } from 'rebass'
import { OutlinedButtons } from '../components'

export const PresetButtonGroup: React.SFC<{ change: Function }> = props => (
  <Flex
    flexDirection="column"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    <Box>
      <OutlinedButtons onClick={props.change} value={30} content={'30%'} />
    </Box>
    <Box>
      <OutlinedButtons onClick={props.change} value={10} content={'10%'} />
    </Box>
    <Box>
      <OutlinedButtons onClick={props.change} value={0} content={'Aus'} />
    </Box>
  </Flex>
)

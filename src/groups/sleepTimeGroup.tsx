import React from 'react'
import { Flex, Box } from 'rebass'
import { OutlinedButtons } from '../components'

export const SleepTimeGroup: React.SFC<{ change: Function }> = props => (
  <Flex
    flexDirection="row"
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
  >
    <Box width={1}>
      <h2 style={{ textAlign: 'center' }}>SleepTimer</h2>
    </Box>
    <Box>
      <OutlinedButtons content={'30 min'} />
    </Box>
    <Box>
      <OutlinedButtons content={'60 min'} />
    </Box>
    <Box>
      <OutlinedButtons content={'90 min'} />
    </Box>
  </Flex>
)
